<script>
  import DisplayCard from "../lib/DisplayCard.svelte";

  export let href = ''
  export let title = undefined
  export let text = ''

  $: card_names = card_names
  $: cards = cards
</script>

{#if text === "video"}
  <div class="video-container">
    <iframe width="100%" height="100%" src="{href.replace("watch?v=", "embed/")}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </div>
{:else if text === "card"}
  <div class="w-[250px] h-[350px]">
    <DisplayCard front_image={href}></DisplayCard>
  </div>
  <!-- {:else if text === "mtg"}
  <div class="card-flex">
    {#each card_names as name, i}
      <div class="card-display">
        <DisplayCard 
        front_image={cards[name] ? cards[name].front : ""}
        back_image={cards[name] ? cards[name].back ? cards[name].back : "" : ""}
        ></DisplayCard>
      </div>
    {/each}
  </div> -->
{:else}
  <img src={href} {title} alt={text} class="w-full">
{/if}

<style>
  .video-container {
    position: relative;
    padding-bottom: 56.25%;
  }

  .video-container > iframe {
    /* display: block;
    margin: 0 auto; */
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>