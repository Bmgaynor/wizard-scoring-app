import React from "react";
import { StateContext } from "../state";
import { Player } from "./Player";

export function Players() {
  const { state } = React.useContext(StateContext);
  return (
    <ul>
      {state.players.map((player, index) => (
        <Player key={index} index={index} player={player} />
      ))}
    </ul>
  );
}
