<script>
    import SvelteMarkdown from "svelte-markdown";
    import HeadingRenderer from "../renderers/Heading.svelte";
    import CodeRenderer from "../renderers/Code.svelte";
    import ParagraphRenderer from "../renderers/Paragraph.svelte";
    import ImageRenderer from "../renderers/Image.svelte";
    import '../renderers/tsl_code_theme.css';

    export let source;
</script>

<SvelteMarkdown 
    source = {source}
    renderers={{
        code : CodeRenderer, 
        heading : HeadingRenderer,
        paragraph : ParagraphRenderer,
        image : ImageRenderer
    }}
></SvelteMarkdown>