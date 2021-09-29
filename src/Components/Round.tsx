import { Grid } from "@mui/material";
import React from "react";
import { Round as RoundType } from "../state";
import { AddActual } from "./AddActual";

export function Round({
  round,
  playerIndex,
}: {
  round: RoundType;
  playerIndex: number;
}) {
  return (
    <Grid item xs={4}>
      <div>Round: {round.number}</div>
      <div>Guess: {round.guess}</div>
      {Number.isInteger(round?.actual) ? (
        <div>Actual: {round.actual}</div>
      ) : (
        <AddActual
          roundNumber={round.number}
          playerIndex={playerIndex}
          actual={round.actual}
        />
      )}
    </Grid>
  );
}
