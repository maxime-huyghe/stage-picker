<script>
  import "../app.css";
</script>

<div class="h-screen flex flex-col justify-between items-center">
  <div class="flex flex-col justify-start">
    <nav class="flex justify-center p-4">
      <h1 class="text-4xl font-extrabold">Smash Stage Picker</h1>
    </nav>

    <slot />
  </div>

  <div class="p-2">©️ Maxime Huyghe, 2022</div>
</div>
