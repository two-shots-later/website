<script>
    import { onMount } from "svelte";

    export let style;

    $: links = [];

    onMount(() => {
        let headers = document.getElementsByClassName("header");

        for (let i = 0; i < headers.length; i++) {
            let header = headers.item(i);
            let label = header.innerHTML;
            let link = header.id;
            let depth = Number(header.tagName.slice(-1));
            links.push({label, link, depth});
        }

        links = links

        console.log(links);
    })
</script>

<div class="flex flex-col {style}">
    <a href="/games">
        <img src="/branding/tsl_logo.png" alt="">
    </a>
    {#each links as link}
        <a href="#{link.link}" style="margin-left: {(link.depth - 1) * 24}px;" class="text-logger dark:text-silver-dollar hover:text-fiery-orange truncate">{link.label}</a>
    {/each}
</div>


