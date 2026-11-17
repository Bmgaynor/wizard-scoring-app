import { reducer, ActionType, Player } from "./state";

const makeState = () => ({
  players: ["a", "b", "c"].map((name): Player => ({ name, rounds: {} })),
});

const names = (players: Player[]) => players.map((p) => p.name);

test("REMOVE_PLAYER removes only the player at the given index", () => {
  [
    [0, ["b", "c"]],
    [1, ["a", "c"]],
    [2, ["a", "b"]],
  ].forEach(([index, expected]) => {
    const state = makeState();
    const next = reducer(state, { type: ActionType.REMOVE_PLAYER, value: index });
    expect(names(next.players)).toEqual(expected);
    expect(names(state.players)).toEqual(["a", "b", "c"]);
  });
});
