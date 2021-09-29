import React from "react";
import { StateContext } from "../state";
import { Score } from "./Score";

export function Scores() {
  const { state } = React.useContext(StateContext);
  return (
    <ul>
      <div>Scores</div>
      {state.players.map((player, index) => (
        <Score key={index} player={player} />
      ))}
    </ul>
  );
}
