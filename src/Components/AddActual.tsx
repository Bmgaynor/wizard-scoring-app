import React, { useContext } from "react";
import { StateContext, ActionType } from "../state";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const MAX_BUTTONS = 5;
export function AddActual({
  roundNumber,
  playerIndex,
  actual,
}: {
  roundNumber: number;
  playerIndex: number;
  actual: number | null;
}) {
  const { dispatch } = useContext(StateContext);

  return (
    <div>
      <div>Actual</div>
      <ButtonGroup variant="contained" aria-label="Add Actual score">
        {Array.from(Array(roundNumber + 1).keys()).map((round, index) => {
          if (index > MAX_BUTTONS) {
            return <></>;
          }
          return (
            <Button
              key={round}
              onClick={() => {
                dispatch({
                  type: ActionType.ADD_PLAYER_ACTUAL,
                  value: {
                    roundNumber,
                    playerIndex,
                    number: round,
                  },
                });
              }}
              disabled={round === actual}
            >
              {round}
            </Button>
          );
        })}
      </ButtonGroup>
      {roundNumber + 1 > MAX_BUTTONS && (
        <FormControl>
          <InputLabel id={`${roundNumber}-Actual`}>Actual</InputLabel>
          <Select
            labelId={`${roundNumber}-Actual`}
            id={`${roundNumber}-Actual`}
            value={actual || 0}
            label="Actual"
            onChange={(e) =>
              dispatch({
                type: ActionType.ADD_PLAYER_ACTUAL,
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
    </div>
  );
}
