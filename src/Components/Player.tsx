import React from "react";
import { ActionType, Player as PlayerType, StateContext } from "../state";
import { AddRound } from "./AddRound";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import IconButton from "@mui/material/IconButton";
import { Grid } from "@mui/material";
import { Round } from "./Round";

export function Player({
  player,
  index,
}: {
  player: PlayerType;
  index: number;
}) {
  const { dispatch } = React.useContext(StateContext);
  const numRounds = Object.keys(player.rounds).length;
  const currentRound = player.rounds[numRounds];
  const isNewGame = numRounds === 0;
  const shouldShowNewRound =
    Number.isInteger(currentRound?.actual) || isNewGame;
  const shouldShowRound = !isNewGame && !shouldShowNewRound;
  return (
    <Grid item xs={12}>
      <Grid container xs={12}>
        <Grid item xs={6}>
          <IconButton
            onClick={() => {
              dispatch({
                type: ActionType.REMOVE_PLAYER,
                value: index,
              });
            }}
          >
            <RemoveCircleOutlineIcon />
          </IconButton>
        </Grid>
        <Grid item xs={6}>
          {player.name}
        </Grid>
      </Grid>
      {shouldShowNewRound && (
        <AddRound playerIndex={index} roundNumber={numRounds + 1} />
      )}
      {shouldShowRound && (
        <Round round={player.rounds[numRounds]} playerIndex={index} />
      )}
    </Grid>
  );
}
