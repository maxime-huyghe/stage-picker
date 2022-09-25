<script context="module" lang="ts">
  import type { Load } from "./[picker]";
  import BoPicker from "$lib/BoPicker.svelte";
  import StagePicker from "$lib/StagePicker.svelte";
  import { GENTLEMAN_STAGES, NORMAL_STAGES } from "$lib/stages";
  import WinnerPicker from "$lib/WinnerPicker.svelte";
  import { someoneWon, picker, lastWinner, matchesWonByPlayer } from "$lib/picker";

  // The URL is too long to prerender this (filesystem errors).
  export const prerender = false;

  export const load: Load = ({ params }) => {
    const { picker: stateParam } = params;
    try {
      picker.setFromBase64(stateParam);
      return {};
    } catch (error) {
      console.error(error);
      return {
        status: 404,
        error: error as Error,
      };
    }
  };
</script>

<script lang="ts">
  $: firstPhase = $picker.phases[0];
</script>

<svelte:head>
  <title>Stage Picker</title>
</svelte:head>

<main class="flex flex-col items-center flex-1">
  {#if firstPhase && !$someoneWon}
    {#if firstPhase.type === "pickBO"}
      <BoPicker />
    {:else if firstPhase.type === "gentleman"}
      <StagePicker
        stages={GENTLEMAN_STAGES}
        gentlemans={true}
        turns={firstPhase.turns}
        on:selection={e => picker.pickedGentlemanStages(e.detail)}
      />
    {:else if firstPhase.type === "rps"}
      <WinnerPicker rpsMode={true} on:winner={e => picker.pickedRpsWinner(e.detail)} />
    {:else if firstPhase.type === "pickWinner"}
      <WinnerPicker
        lastChosenStage={$picker.currentStage}
        on:winner={e => picker.pickedWinner(e.detail)}
      />
    {:else if firstPhase.type === "firstPickBan"}
      <StagePicker
        stages={[...NORMAL_STAGES, ...$picker.gentlemanStages]}
        firstToPick={$picker.rpsWinner}
        turns={firstPhase.turns}
        on:selection={e => picker.pickedStage(e.detail)}
      />
    {:else if firstPhase.type === "restOfPickBansAndWinnerPicks"}
      <StagePicker
        stages={[...NORMAL_STAGES, ...$picker.gentlemanStages]}
        firstToPick={$lastWinner}
        turns={firstPhase.turns}
        on:selection={e => picker.pickedStage(e.detail)}
      />
    {/if}
  {:else}
    <div class="text-2xl">
      Congratulations, player {$matchesWonByPlayer[1] > $matchesWonByPlayer[2] ? 1 : 2}!
    </div>
  {/if}
</main>
