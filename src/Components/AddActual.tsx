import React, { useContext } from "react";
import { StateContext, ActionType } from "../state";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

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
    </div>
  );
}
