import React, { useContext } from "react";
import { StateContext, ActionType } from "../state";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";

export function AddPlayer() {
  const [playerName, setPlayerName] = React.useState("");
  const { dispatch } = useContext(StateContext);
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({
            type: ActionType.ADD_PLAYER,
            value: playerName,
          });
          setPlayerName("");
        }}
      >
        <TextField
          id="newPlayerName"
          label="Add Player"
          variant="outlined"
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
        />
        <IconButton type="submit">
          <AddIcon />
        </IconButton>
      </form>
    </div>
  );
}
