import React, { useContext } from "react";
import { StateContext, ActionType } from "../state";

export function AddActual({
  roundNumber,
  playerIndex,
}: {
  roundNumber: number;
  playerIndex: number;
}) {
  const { dispatch } = useContext(StateContext);

  return (
    <div>
      <div>Set Actual</div>
      <ul>
        {Array.from(Array(roundNumber + 1).keys()).map((round, index) => {
          return (
            <button
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
            >
              {round}
            </button>
          );
        })}
      </ul>
    </div>
  );
}
