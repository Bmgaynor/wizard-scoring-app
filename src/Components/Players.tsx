import React from "react";
import { StateContext } from "../state";
import { Player } from "./Player";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

export function Players() {
  const { state } = React.useContext(StateContext);
  return (
    <div>
      <Typography variant="h4" component="div">
        Players
      </Typography>
      <Grid container>
        {state.players.map((player, index) => (
          <Player key={index} index={index} player={player} />
        ))}
      </Grid>
    </div>
  );
}
