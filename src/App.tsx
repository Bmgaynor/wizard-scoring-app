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
import { AppBar, Toolbar, Typography } from "@mui/material";
import useLocalStorage from "hook-local-storage";

/*
  State
    List of players
      Current Score
      array of guesses 
      array of actuals 

 */

function App() {
  const [store, setStore] = useLocalStorage("store", defaultState);
  const [state, dispatch] = React.useReducer(reducer, store);
  React.useEffect(() => {
    setStore(state);
  }, [state, setStore]);
  return (
    <StateContext.Provider value={{ state, dispatch }}>
      <React.Fragment>
        <CssBaseline />
        <AppBar
          position="absolute"
          color="transparent"
          elevation={0}
          sx={{
            position: "relative",
            borderBottom: (t) => `1px solid ${t.palette.divider}`,
          }}
        >
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
              Wizard Scoring App
            </Typography>
          </Toolbar>
        </AppBar>
        <Container maxWidth="lg">
          <Box
            sx={{
              bgcolor: "white",
              minHeight: "100vh",
              paddingTop: "1rem",
              paddingBottom: "1rem",
            }}
          >
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
