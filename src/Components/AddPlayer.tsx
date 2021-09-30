import React, { useContext } from "react";
import { StateContext, ActionType } from "../state";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import { Card, CardActionArea, CardContent } from "@mui/material";

export function AddPlayer() {
  const [playerName, setPlayerName] = React.useState("");
  const { dispatch } = useContext(StateContext);
  return (
    <Card>
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
        <CardContent>
          <TextField
            id="newPlayerName"
            label="Add Player"
            variant="outlined"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
          />
        </CardContent>
        <CardActionArea>
          <IconButton type="submit">
            <AddIcon />
          </IconButton>
        </CardActionArea>
      </form>
    </Card>
  );
}
