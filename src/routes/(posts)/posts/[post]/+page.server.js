import { error } from '@sveltejs/kit';

const ERROR_404 =  error(404, {
    message: "Post not found."
});

/** @type {import('./$types').PageLoad} */
export async function load({ params, route }) {
    let all_blog_content = import.meta.glob('/src/data/blogs/*/*.md', {as: 'raw'});
    let blog_content;

    let all_blog_meta = import.meta.glob('/src/data/blogs/*/*.json', {as: 'raw'});
    let blog_meta;

    for (const path in all_blog_content) {
        if(path.includes(params.post)) {
            await all_blog_content[path]().then((mod) => {
                blog_content = mod
            })
        }
    }

    if(blog_content === undefined) {
        throw ERROR_404;
    }

    for (const path in all_blog_meta) {
        if(path.includes(params.post)) {
            await all_blog_meta[path]().then((mod) => {
                blog_meta = JSON.parse(mod)
            })
        }
    }

    if(blog_meta === undefined) {
        throw ERROR_404;
    }

    const now = new Date()
    let publish_date = new Date(blog_meta.publish_date)
    
    if(now < publish_date) {
        throw error(404, {
            message: "Post not found."
        })
    }

    return {
        blog_content,
        blog_meta,
        blog_name : params.post
    }
}