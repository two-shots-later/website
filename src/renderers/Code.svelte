<script>
  import hljs from 'highlight.js';

  export let lang;
  export let text;
  
  const html = hljs.highlight(text, {language : lang}).value;
</script>

<pre class="aura my-6"><code class={lang + " hljs "}>{@html html}</code></pre>

<style scoped>
  .aura {
      box-shadow: 0px 0px 200px 5px rgba(177, 69, 21, 0.25);
  }
</style>