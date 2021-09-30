import React from "react";
import { ActionType, Player as PlayerType, StateContext } from "../state";
import { AddRound } from "./AddRound";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import IconButton from "@mui/material/IconButton";
import {
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { Round } from "./Round";
import { Box } from "@mui/system";

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
                <Round round={player.rounds[numRounds]} playerIndex={index} />
              )}
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
            </CardActions>
          </React.Fragment>
        </Card>
      </Box>
    </Grid>
  );
}
