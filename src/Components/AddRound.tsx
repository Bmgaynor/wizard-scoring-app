import React, { useContext } from "react";
import { StateContext, ActionType } from "../state";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";

const MAX_BUTTONS = 5;

export function AddRound({
  roundNumber,
  playerIndex,
}: {
  roundNumber: number;
  playerIndex: number;
}) {
  const { dispatch } = useContext(StateContext);

  return (
    <Grid>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        guess
      </Typography>
      <ButtonGroup variant="contained" aria-label="Create new round">
        {Array.from(Array(roundNumber + 1).keys()).map((round, index) => {
          if (index > MAX_BUTTONS) {
            return <></>;
          }
          return (
            <Button
              key={round}
              onClick={() => {
                dispatch({
                  type: ActionType.ADD_PLAYER_GUESS,
                  value: {
                    roundNumber,
                    playerIndex,
                    number: round,
                  },
                });
              }}
            >
              {round}
            </Button>
          );
        })}
      </ButtonGroup>
      {roundNumber + 1 > MAX_BUTTONS && (
        <FormControl>
          <InputLabel id={`${roundNumber}-Guess`}>Guess</InputLabel>
          <Select
            labelId={`${roundNumber}-Guess`}
            id={`${roundNumber}-Guess`}
            value={0}
            label="Guess"
            onChange={(e) =>
              dispatch({
                type: ActionType.ADD_PLAYER_GUESS,
                value: {
                  roundNumber,
                  playerIndex,
                  number: Number(e.target.value),
                },
              })
            }
          >
            {Array.from(Array(roundNumber + 1).keys()).map((round, index) => {
              return (
                <MenuItem key={index} value={round}>
                  {round}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      )}
    </Grid>
  );
}
