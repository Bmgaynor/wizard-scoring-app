import React, { useContext } from "react";
import { StateContext, ActionType } from "../state";

export function NewGame() {
  const { dispatch } = useContext(StateContext);
  return (
    <button
      onClick={() => {
        dispatch({ type: ActionType.NEW_GAME, value: {} });
      }}
    >
      New Game
    </button>
  );
}
