import { Button } from "@mui/material";
import React, { useContext } from "react";
import { StateContext, ActionType } from "../state";

export function NewGame() {
  const { dispatch } = useContext(StateContext);
  return (
    <Button
      onClick={() => {
        dispatch({ type: ActionType.NEW_GAME, value: {} });
      }}
    >
      New Game
    </Button>
  );
}
