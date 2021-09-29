import React, { useContext } from "react";
import { StateContext, ActionType } from "../state";

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
        <label htmlFor="newPlayerName">Add Player</label>
        <input
          type="text"
          name="newPlayerName"
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
        />
        <button type="submit">+</button>
      </form>
    </div>
  );
}
