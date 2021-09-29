import React from "react";
import { ActionType, Round as RoundType, StateContext } from "../state";
import { AddActual } from "./AddActual";

export function Round({
  round,
  playerIndex,
}: {
  round: RoundType;
  playerIndex: number;
}) {
  return (
    <li>
      <div>Number: {round.number}</div>
      <div>Guess: {round.guess}</div>
      <div>Actual: {round.actual || ""}</div>
      <AddActual roundNumber={round.number} playerIndex={playerIndex} />
    </li>
  );
}
