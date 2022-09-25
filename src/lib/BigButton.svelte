<button
  class={`cut-corner text-5xl font-semibold mt-2 px-2 py-1 flex-1 max-h-32 bg-slate-400 ${$$props.class}`}
  on:click
>
  <slot />
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
