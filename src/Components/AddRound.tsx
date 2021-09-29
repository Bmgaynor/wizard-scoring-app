import React, { useContext } from "react";
import { StateContext, ActionType } from "../state";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

export function AddRound({
  roundNumber,
  playerIndex,
}: {
  roundNumber: number;
  playerIndex: number;
}) {
  const { dispatch } = useContext(StateContext);

  return (
    <div>
      <div>Guess</div>
      <ButtonGroup variant="contained" aria-label="Create new round">
        {Array.from(Array(roundNumber + 1).keys()).map((round, index) => {
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
    </div>
  );
}
