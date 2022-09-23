import { goto } from "$app/navigation";
import { array, assert, number, object, optional, string, type Infer } from "superstruct";
import { derived, get, writable, type Writable } from "svelte/store";
import { GENTLEMAN_STAGES } from "./stages";
import { DEFAULT_RULESET, Phases, Player, type SelectionResult } from "./types";
import { base64Decode, base64Encode } from "./utils";

export const Picker = object({
  // For resetting purposes.
  initialPhases: Phases,
  phases: Phases,
  bestOf: optional(number()),
  gentlemanStages: array(string()),
  currentStage: optional(string()),
  matchResults: array(Player),
  rpsWinner: optional(Player),
});

export type Picker = Infer<typeof Picker>;

function createPickerState() {
  const store: Writable<Picker> = writable({
    initialPhases: [...DEFAULT_RULESET],
    phases: [...DEFAULT_RULESET],
    bestOf: undefined,
    gentlemanStages: [...GENTLEMAN_STAGES],
    currentStage: undefined,
    matchResults: [],
    rpsWinner: undefined,
  });

  const update = (fun: (as: Picker) => Picker) => {
    const newState = fun(get(store));
    store.set(newState);
    goto(`${base64Encode(JSON.stringify(newState))}`);
  };

  return {
    subscribe: store.subscribe,
    setFromBase64: (b64: string) => {
      const json = base64Decode(b64);
      const object: unknown = JSON.parse(json);
      assert(object, Picker);
      store.set(object);
    },
    pickedBo: (bo: number) => update(s => advanceToNextPhase(s, { bestOf: bo })),
    pickedWinner: (winner: Player) =>
      update(s => advanceToNextPhase(s, { matchResults: [...s.matchResults, winner] })),
    pickedRpsWinner: (winner: Player) => update(s => advanceToNextPhase(s, { rpsWinner: winner })),
    pickedGentlemanStages: (selection: SelectionResult) =>
      update(s => advanceToNextPhase(s, { gentlemanStages: selection.picked })),
    pickedStage: (selection: SelectionResult) =>
      update(s => advanceToNextPhase(s, { currentStage: selection.picked[0] })),
    reset: () =>
      update(picker => ({
        initialPhases: picker.initialPhases,
        phases: picker.initialPhases,
        gentlemanStages: [],
        matchResults: [],
      })),
  };
}

export const picker = createPickerState();

// Used to determine whether to display the reset button or not.
export const pickerChangedFromInitial = derived(
  picker,
  // Comparing the length is enough as the phases array always gets shorter when it changes.
  $state => $state.initialPhases.length !== $state.phases.length,
);

function advanceToNextPhase(
  current: Picker,
  newProperties: Partial<Omit<Picker, "phases">>,
  newPhases?: Phases,
): Picker {
  let { phases } = current;
  if (phases[0].type === "restOfPickBansAndWinnerPicks" && !get(someoneWon)) {
    phases = [{ type: "pickWinner" }, ...phases];
  } else {
    phases = phases.slice(1);
  }
  return {
    ...current,
    ...newProperties,
    phases,
  };
}

function rest<T>(arr: T[]): T[] {
  return arr.slice(1);
}

export const lastWinner = derived(picker, $state =>
  $state.matchResults.length ? $state.matchResults.at(-1) : 1,
);

export const requiredWins = derived(picker, $state =>
  $state.bestOf ? Math.ceil($state.bestOf / 2) : Infinity,
);

export const matchesWonByPlayer = derived(picker, ({ matchResults }) =>
  matchResults.reduce((acc, cur) => ({ ...acc, [cur]: acc[cur] + 1 }), { 1: 0, 2: 0 }),
);

export const someoneWon = derived(
  [matchesWonByPlayer, requiredWins],
  ([wins, required]) => wins[1] >= required || wins[2] >= required,
);
