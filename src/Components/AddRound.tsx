import React, { useContext } from "react";
import { StateContext, ActionType } from "../state";

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
      <ul>
        {Array.from(Array(roundNumber + 1).keys()).map((round, index) => {
          return (
            <button
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
            </button>
          );
        })}
      </ul>
    </div>
  );
}
