import React from "react";
import { StateContext } from "../state";
import { Player } from "./Player";
import Grid from "@mui/material/Grid";

export function Players() {
  const { state } = React.useContext(StateContext);
  return (
    <div>
      <div>Players</div>
      <Grid container>
        {state.players.map((player, index) => (
          <Player key={index} index={index} player={player} />
        ))}
      </Grid>
    </div>
  );
}
