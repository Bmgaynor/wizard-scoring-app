import {
  Card,
  CardContent,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import { ActionType, Round as RoundType, StateContext } from "../state";

export function Round({
  round,
  playerIndex,
}: {
  round: RoundType;
  playerIndex: number;
}) {
  const { dispatch } = useContext(StateContext);
  console.log({ round, playerIndex });
  return (
    <Grid item xs={4}>
      <Card>
        <CardContent>
          <Typography variant="h6" component="div">
            Round {round.number}
          </Typography>
          <FormControl fullWidth>
            <InputLabel id={`${round.number}-guess`}>Guess</InputLabel>
            <Select
              labelId={`${round.number}-guess`}
              id={`${round.number}-guess`}
              value={round.guess}
              label="Guess"
              onChange={(e) =>
                dispatch({
                  type: ActionType.ADD_PLAYER_GUESS,
                  value: {
                    roundNumber: round.number,
                    playerIndex,
                    number: Number(e.target.value),
                  },
                })
              }
            >
              {Array.from(Array(round.number + 1).keys()).map(
                (round, index) => {
                  return (
                    <MenuItem key={index} value={round}>
                      {round}
                    </MenuItem>
                  );
                }
              )}
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id={`${round.number}-Actual`}>Actual</InputLabel>
            <Select
              labelId={`${round.number}-Actual`}
              id={`${round.number}-Actual`}
              value={round.actual || 0}
              label="Actual"
              onChange={(e) =>
                dispatch({
                  type: ActionType.ADD_PLAYER_ACTUAL,
                  value: {
                    roundNumber: round.number,
                    playerIndex,
                    number: Number(e.target.value),
                  },
                })
              }
            >
              {Array.from(Array(round.number + 1).keys()).map(
                (round, index) => {
                  return (
                    <MenuItem key={index} value={round}>
                      {round}
                    </MenuItem>
                  );
                }
              )}
            </Select>
          </FormControl>
        </CardContent>
      </Card>
    </Grid>
  );
}
