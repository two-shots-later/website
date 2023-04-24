<script>
    export let data;

    import Card from "../lib/Card.svelte";

    function handleClick() {
        window.open("https://rustaway.itch.io/the-fantastical-cookbook");
    }
    function handleMouseEnter() {}
    function handleMouseOut() {}
</script>

<div class="parent">
    <img
        src="branding/text_clear_tsl_gun.png"
        alt="two shots later logo"
        width="275"
        height="275"
        class="child"
    />
    <div class="w-full flex flex-wrap justify-center gap-10 px-[5%]">
        {#each data.games as game, index}
            <Card gameData="{game}" isNewest="{index == 0}"></Card>
        {/each}
    </div>
</div>

<style>
    .parent {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
    .child {
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 10px;
        margin-top: 7px;
    }
    .text_child {
        justify-content: center;
        margin: auto;
    }
    .game_image {
        width: 400px;
        height: 300px;
        border-radius: 4px;
        cursor: pointer;
    }
</style>
