<script lang="ts">
  import BigButton from "./BigButton.svelte";
  import { picker } from "./picker";
</script>

<h2 class="text-4xl font-semibold mb-4">Set type?</h2>

<div class="flex flex-col flex-1 w-full">
  <BigButton on:click={() => picker.pickedBo(3)}>BO3</BigButton>
  <BigButton on:click={() => picker.pickedBo(5)}>BO5</BigButton>
</div>
