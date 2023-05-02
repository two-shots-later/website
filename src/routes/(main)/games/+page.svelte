<script>
    import Card from '../../../lib/Card.svelte';

    export let data;
</script>

<div class="w-full flex flex-wrap justify-center gap-10 px-[5%]">
    {#each data.games as game, index}
        <Card gameData="{game}" isNewest="{index == 0}"></Card>
    {/each}
</div>