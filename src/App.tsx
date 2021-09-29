import React from "react";

import "./App.css";
import { StateContext, defaultState, reducer } from "./state";
import { Players } from "./Components/Players";
import { AddPlayer } from "./Components/AddPlayer";
import { Scores } from "./Components/Scores";
import { NewGame } from "./Components/NewGame";

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
    <div className="App">
      <StateContext.Provider value={{ state, dispatch }}>
        <AddPlayer />
        <Players />
        <Scores />
        <NewGame />
      </StateContext.Provider>
    </div>
  );
}

export default App;
