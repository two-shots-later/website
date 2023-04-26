<script>
    import SvelteMarkdown from "svelte-markdown";
    import HeadingRenderer from "../../../../renderers/Heading.svelte";
    import CodeRenderer from "../../../../renderers/Code.svelte";
    import 'highlight.js/styles/base16/monokai.css';
  import { readable } from "svelte/store";
    export let data;

    function ordinal_suffix_of(i) {
        var j = i % 10,
            k = i % 100;
        if (j == 1 && k != 11) {
            return "st";
        }
        if (j == 2 && k != 12) {
            return "nd";
        }
        if (j == 3 && k != 13) {
            return "rd";
        }
        return "th";
    }

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let publish_date = new Date(data.blog_meta.publish_date);
    const readable_date = `${months[publish_date.getMonth()]} ${publish_date.getDate()}${ordinal_suffix_of(publish_date.getDate())}, ${publish_date.getFullYear()}`
</script>

<!-- Hero Content -->
<div 
    role="img" 
    aria-label="The hero image for {data.blog_meta.blog_name}"
    style="background-image: url('{data.blog_meta.header_image}');" 
    class="w-full h-[600px] bg-cover bg-center flex justify-center mb-10">
    <div class="p-2 flex flex-col justify-center">
        <div class="bg-black/25 p-2 max-w-[60vw]">
            <h1 class="text-7xl text-white text-center my-3">{data.blog_meta.title}</h1>
            <div class="flex justify-center">
                <p class="text-white">Brooks Palin | {readable_date}</p>
            </div>
        </div>
    </div>
</div>

<!-- Content -->
<div class="w-[600px] m-auto">
    <SvelteMarkdown renderers={{code : CodeRenderer, heading : HeadingRenderer}} source="{data.blog_content}"></SvelteMarkdown>
</div>


<style scoped>
    p {
        font-size: x-large;
    }
</style>