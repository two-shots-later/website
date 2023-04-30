<script>
    import { onMount } from 'svelte';
    import Markdown from '../../../../lib/Markdown.svelte';
    import { children, each } from 'svelte/internal';
    import NavList from '../../../../lib/NavList.svelte';

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

    //Reformat the readable date
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let publish_date = new Date(data.blog_meta.publish_date);
    const readable_date = `${months[publish_date.getMonth()]} ${publish_date.getDate()}${ordinal_suffix_of(publish_date.getDate())}, ${publish_date.getFullYear()}`
</script>

<div class="mx-6">
    
    <!-- Hero Content -->
    <div class="w-full pt-6">
        <div 
            role="img" 
            aria-label="The hero image for {data.blog_meta.blog_name}"
            style="background-image: url('{data.blog_meta.header_image}');" 
            class="w-full h-[600px] bg-cover bg-center flex justify-center mb-10 rounded-md shadow-2xl shadow-fiery-orange aura">
        </div>
    </div>

    <!-- Content -->
    <div class="flex flex-col justify-center mx-6 xl:mx-auto flex-nowrap max-w-[1200px]">
        <div class="flex justify-between">
            <h1 class="text-7xl dark:text-silver-dollar text-logger font-titillium mb-3 text-center">{data.blog_meta.title}</h1>
            <!-- <div class="flex flex-col justify-center gap-2 hidden lg:block">
                <p class="dark:text-silver-dollar text-logger text-2xl font-titillium text-center">{data.blog_meta.author}</p>
                <hr class="dark:text-silver-dollar text-logger">
                <p class="dark:text-silver-dollar text-logger text-xl font-titillium text-center">{readable_date}</p>
            </div> -->
        </div>
        <p class="dark:text-silver-dollar text-logger text-2xl font-titillium text-center">{data.blog_meta.author} | {readable_date}</p>
        <hr class="my-6 text-logger dark:text-silver-dollar">
        <div class="flex justify-between">
            <div>
                <Markdown source="{data.blog_content}"></Markdown>
            </div>
            <div class="hidden lg:block">
                <NavList style="sticky top-6 mx-4 p-4 border border-logger dark:border-silver-dollar bg-silver-dollar dark:bg-logger rounded-md"></NavList>
            </div>
        </div>
    </div>
</div>




<style scoped>
    .aura {
        box-shadow: 0px 50px 150px 75px rgba(177, 69, 21, 0.25);
    }
</style>