import React from "react";
import { ActionType, StateContext } from "../state";
import { IconButton, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Rounds } from "./Rounds";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

export function History() {
  const { state } = React.useContext(StateContext);
  const { dispatch } = React.useContext(StateContext);
  return (
    <div>
      <div>History</div>
      <Grid container>
        {state.players.map((player, index) => (
          <Grid key={index} item xs={12}>
            <Typography variant="h5">
              {player.name}{" "}
              <IconButton
                onClick={() => {
                  dispatch({
                    type: ActionType.REMOVE_PLAYER,
                    value: index,
                  });
                }}
              >
                <RemoveCircleOutlineIcon />
              </IconButton>
            </Typography>
            <Rounds key={index} playerIndex={index} rounds={player.rounds} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
