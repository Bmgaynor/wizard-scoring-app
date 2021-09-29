import { createContext } from "react";

export type Round = {
  guess: number;
  actual: number | null;
  number: number;
};

export type Player = {
  name: string;
  rounds: Record<number, Round>;
};

type State = {
  players: Array<Player>;
};

export enum ActionType {
  "ADD_PLAYER",
  "REMOVE_PLAYER",
  "ADD_PLAYER_GUESS",
  "ADD_PLAYER_ACTUAL",
  "NEW_GAME",
}
export const defaultState = {
  players: [] as Array<Player>,
};

export const StateContext = createContext({
  state: defaultState,
  dispatch: (action: Action) => {},
});

type Action = {
  type: ActionType;
  value: any;
};

export function reducer(state: State, action: Action): State {
  console.log({ state, action });
  switch (action.type) {
    case ActionType.ADD_PLAYER:
      const newPlayer = action.value;
      return {
        ...state,
        players: [
          ...state.players,
          {
            name: newPlayer,
            rounds: {},
          },
        ],
      };
    case ActionType.REMOVE_PLAYER:
      const playerIndex = action.value;
      return {
        ...state,
        players: state.players.splice(playerIndex + 1, 1),
      };
    case ActionType.ADD_PLAYER_ACTUAL:
      return {
        ...state,
        players: state.players.map((player, index) => {
          if (index !== action.value.playerIndex) {
            return player;
          }
          return {
            ...player,
            rounds: {
              ...player.rounds,
              [action.value.roundNumber]: {
                ...player.rounds[action.value.roundNumber],
                actual: action.value.number,
              },
            },
          };
        }),
      };
    case ActionType.ADD_PLAYER_GUESS:
      return {
        ...state,
        players: state.players.map((player, index) => {
          if (index !== action.value.playerIndex) {
            return player;
          }
          return {
            ...player,
            rounds: {
              ...player.rounds,
              [action.value.roundNumber]: {
                ...player.rounds[action.value.roundNumber],
                guess: action.value.number,
                number: action.value.roundNumber,
              },
            },
          };
        }),
      };
    case ActionType.NEW_GAME:
      return {
        players: state.players.map((player) => {
          return {
            ...player,
            rounds: {},
          };
        }),
      };
    default:
      throw new Error();
  }
}
