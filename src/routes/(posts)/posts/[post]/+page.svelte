<script>
    import Markdown from '../../../../lib/Markdown.svelte';

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
<div class="w-full px-6 pt-6">
    <div 
        role="img" 
        aria-label="The hero image for {data.blog_meta.blog_name}"
        style="background-image: url('{data.blog_meta.header_image}');" 
        class="w-full h-[600px] bg-cover bg-center flex justify-center mb-10 rounded-md shadow-2xl shadow-fiery-orange aura">
    </div>
</div>

<div class="flex justify-between mb-10 mx-6">
    <h1 class="text-7xl dark:text-silver-dollar text-logger font-titillium mb-3">{data.blog_meta.title}</h1>
    <div class="bg-black/25 p-2 max-w-[60vw]">
        <div class="flex flex-col justify-center gap-2">
            <p class="dark:text-silver-dollar text-logger text-2xl font-titillium text-center">{data.blog_meta.author}</p>
            <hr class="dark:text-silver-dollar text-logger">
            <p class="dark:text-silver-dollar text-logger text-xl font-titillium text-center">{readable_date}</p>
        </div>
    </div>
</div>

<!-- Content -->
<div class="w-[900px] mx-8">
    <Markdown source="{data.blog_content}"></Markdown>
</div>


<style scoped>
    .aura {
        box-shadow: 0px 50px 150px 75px rgba(177, 69, 21, 0.25);
    }
</style>