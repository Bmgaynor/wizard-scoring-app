import React from "react";
import { ActionType, Player as PlayerType, StateContext } from "../state";
import { AddRound } from "./AddRound";
import { Rounds } from "./Rounds";

export function Player({
  player,
  index,
}: {
  player: PlayerType;
  index: number;
}) {
  const { dispatch } = React.useContext(StateContext);
  return (
    <li>
      <div>{player.name}</div>
      <button
        onClick={() => {
          dispatch({
            type: ActionType.REMOVE_PLAYER,
            value: index,
          });
        }}
      >
        X
      </button>
      <Rounds rounds={player.rounds} playerIndex={index} />
      <AddRound
        playerIndex={index}
        roundNumber={Object.keys(player.rounds).length + 1}
      />
    </li>
  );
}
