<script lang="ts">
  import type { StageData, StageSelected } from "./stages";

  export let stage: StageData;
  export let selected: StageSelected;
  export let onClick: () => void = () => {};
</script>

<button class="cut-corner m-2 relative shadow-md" on:click={onClick}>
  <div
    class="absolute z-10 w-full h-full"
    class:bg-black={selected !== "bannedByP1" && selected !== "bannedByP2"}
    class:bg-red-500={selected === "bannedByP1"}
    class:bg-blue-500={selected === "bannedByP2"}
    class:bg-opacity-0={selected === "picked"}
    class:bg-opacity-50={selected === "no"}
    class:bg-opacity-70={selected === "bannedByP1" || selected === "bannedByP2"}
  >
    <span
      class="absolute z-20 bottom-0 left-0 w-full h-8 text-center text-lg bg-opacity-80 text-white bg-slate-800"
    >
      {stage.name}
    </span>
  </div>
  <img src={stage.image} alt={stage.name} class="w-64" />
</button>

<style>
  :root {
    --cut-corner-size: 20px;
  }
  .cut-corner {
    clip-path: polygon(
      0 0,
      calc(100% - var(--cut-corner-size)) 0,
      100% var(--cut-corner-size),
      100% 100%,
      0 100%
    );
  }
</style>
