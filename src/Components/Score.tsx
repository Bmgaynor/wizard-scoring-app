import React from "react";
import { Round as RoundType, Player } from "../state";

function getScore(round: RoundType): number {
  if (!round.guess || !round.actual) {
    return 0;
  }
  if (round.guess === round.actual) {
    return 20 + 10 * round.guess;
  } else {
    return Math.abs(round.guess - round.actual) * -10;
  }
}
function getScores(rounds: Player["rounds"]): number {
  return Object.values(rounds).reduce((acc, round) => {
    return acc + getScore(round);
  }, 0);
}

export function Score({ player }: { player: Player }) {
  return (
    <li>
      <div>{player.name}</div>
      <div>Score: {getScores(player.rounds)}</div>
    </li>
  );
}
