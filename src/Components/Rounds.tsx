import React from "react";
import { Player } from "../state";
import { Round } from "./Round";

export function Rounds({
  rounds,
  playerIndex,
}: {
  rounds: Player["rounds"];
  playerIndex: number;
}) {
  //   const { state } = React.useContext(StateContext);
  return (
    <ul>
      {Object.values(rounds).map((round, index) => {
        return <Round key={index} round={round} playerIndex={playerIndex} />;
      })}
    </ul>
  );
}
