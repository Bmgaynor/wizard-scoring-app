import React from "react";

import "./App.css";
import { StateContext, defaultState, reducer } from "./state";
import { Players } from "./Components/Players";
import { AddPlayer } from "./Components/AddPlayer";
import { Scores } from "./Components/Scores";
import { NewGame } from "./Components/NewGame";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { History } from "./Components/History";
/*
  State
    List of players
      Current Score
      array of guesses 
      array of actuals 

 */

function App() {
  const [state, dispatch] = React.useReducer(reducer, defaultState);
  return (
    <StateContext.Provider value={{ state, dispatch }}>
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg">
          <Box sx={{ bgcolor: "#cfe8fc", minHeight: "100vh" }}>
            <Grid container>
              <Grid item xs={12} md={2}>
                <AddPlayer />
                <NewGame />
                <Scores />
              </Grid>
              <Grid item xs={12} md={8}>
                <Players />
                <History />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </React.Fragment>
    </StateContext.Provider>
  );
}

export default App;
