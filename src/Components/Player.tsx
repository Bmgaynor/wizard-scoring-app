import React from "react";
import { Player as PlayerType } from "../state";
import { AddRound } from "./AddRound";

import {
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";

import { Box } from "@mui/system";
import { AddActual } from "./AddActual";

export function Player({
  player,
  index,
}: {
  player: PlayerType;
  index: number;
}) {
  const numRounds = Object.keys(player.rounds).length;
  const currentRound = player.rounds[numRounds];
  const isNewGame = numRounds === 0;
  const shouldShowNewRound =
    Number.isInteger(currentRound?.actual) || isNewGame;
  const shouldShowRound = !isNewGame && !shouldShowNewRound;
  return (
    <Grid item xs={12}>
      <Box sx={{ minWidth: 275 }}>
        <Card variant="outlined">
          <React.Fragment>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                player
              </Typography>
              <Typography variant="h5" component="div">
                {player.name}
              </Typography>
            </CardContent>
            <CardActions>
              {shouldShowNewRound && (
                <AddRound playerIndex={index} roundNumber={numRounds + 1} />
              )}
              {shouldShowRound && (
                <AddActual
                  playerIndex={index}
                  roundNumber={numRounds}
                  actual={currentRound?.actual}
                />
              )}
            </CardActions>
          </React.Fragment>
        </Card>
      </Box>
    </Grid>
  );
}
