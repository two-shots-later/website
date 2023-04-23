<script>
    function handleClick() {
        window.open("https://rustaway.itch.io/the-fantastical-cookbook");
    }
    function handleMouseEnter() {}
    function handleMouseOut() {}
</script>

<div class="parent">
    <div class="parent child">
        <img
            src="fantastical_cookbook.GIF"
            alt="goblin standing behind bar with food to the left"
            class="child game_image"
            on:click={handleClick}
        />
        <a
            href="https://rustaway.itch.io/the-fantastical-cookbook"
            style="text-decoration:none"
            class="text_child"
            target="_blank"
        >
            The Fantastical Cookbook
        </a>
        <!-- <h2 class="text_child" cursor="pointer">The Fantastical Cookbook</h2> -->
        <p class="text_child">Cook fantastical food for friends</p>
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
    ul#menu li {
        display: inline;
    }
</style>