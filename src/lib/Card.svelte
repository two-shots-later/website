<script>
  export let gameData;
</script>

<div class="flex flex-col gap-2">
  <div style="background-image: url('/{gameData.image}');" class="w-[300px] h-[300px] bg-contain bg-center"></div>
  <h1 >{gameData.title}</h1>
</div>