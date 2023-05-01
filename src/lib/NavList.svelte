<script>
    import { onMount } from "svelte";

    export let style;

    $: links = [];
    let scroll_y;

    onMount(() => {
        let headers = document.getElementsByClassName("header");

        for (let i = 0; i < headers.length; i++) {
            let header = headers.item(i);
            let label = header.innerHTML;
            let link = header.id;
            let top = header.getBoundingClientRect().y + window.scrollY;
            let depth = Number(header.tagName.slice(-1));
            links.push({label, link, depth, top, style});
        }

        links = links
    })
</script>

<div class="flex flex-col {style}">
    <a href="/games">
        <img src="/branding/tsl_logo.png" alt="">
    </a>
    {#each links as link}
        <a 
            href="#{link.link}" 
            style="margin-left: {(link.depth - 1) * 24}px;" 
            class="{link.top < scroll_y ? 'text-fiery-orange' : 'text-logger dark:text-silver-dollar'} hover:text-fiery-orange font-titillium truncate"
        >
        {link.label}
        </a>
    {/each}
</div>

<svelte:window bind:scrollY={scroll_y}/>

