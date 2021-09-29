import React from "react";
import { StateContext } from "../state";

import Grid from "@mui/material/Grid";
import { Rounds } from "./Rounds";

export function History() {
  const { state } = React.useContext(StateContext);
  return (
    <div>
      <div>History</div>
      <Grid container>
        {state.players.map((player, index) => (
          <Grid item xs={12}>
            <div>{player.name}</div>
            <Rounds key={index} playerIndex={index} rounds={player.rounds} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
