<script lang="ts">
  import Button from "./Button.svelte";
  import { picker } from "./picker";
</script>

<div class="text-2xl">Set type?</div>

<Button on:click={() => picker.pickedBo(3)}>BO3</Button>
<Button on:click={() => picker.pickedBo(5)}>BO5</Button>
