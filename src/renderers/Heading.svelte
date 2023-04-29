<script>
    import { getContext } from 'svelte'
    import { key } from 'svelte-markdown/src/context'
    export let depth
    export let raw
    export let text
    const { slug, getOptions } = getContext(key)
    const options = getOptions()
    $: id = options.headerIds
      ? options.headerPrefix + slug(text)
      : undefined
  </script>
  
  {#if depth === 1}
    <h1 {id} class="header text-6xl text-logger dark:text-silver-dollar my-7 text font-titillium"><slot></slot></h1>
  {:else if depth === 2}
    <h2 {id} class="header text-5xl text-logger dark:text-silver-dollar my-6 text font-titillium"><slot></slot></h2>
  {:else if depth === 3}
    <h3 {id} class="header text-4xl text-logger dark:text-silver-dollar my-6 text font-titillium"><slot></slot></h3>
  {:else if depth === 4}
    <h4 {id} class="header text-3xl text-logger dark:text-silver-dollar my-6 text font-titillium"><slot></slot></h4>
  {:else if depth === 5}
    <h5 {id} class="header text-2xl text-logger dark:text-silver-dollar my-6 text font-titillium"><slot></slot></h5>
  {:else if depth === 6}
    <h6 {id} class="header text-xl text-logger dark:text-silver-dollar my-4 text font-titillium"><slot></slot></h6>
  {:else}
    {raw}
  {/if}