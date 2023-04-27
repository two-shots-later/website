/** @type {import('./$types').PageLoad} */
export async function load({ params, route }) {
    let all_blog_content = import.meta.glob('/src/data/blogs/*/*.md', {as: 'raw'});
    let blog_content = '';

    let all_blog_meta = import.meta.glob('/src/data/blogs/*/*.json', {as: 'raw'});
    let blog_meta = {}

    for (const path in all_blog_content) {
        if(path.includes(params.post)) {
            await all_blog_content[path]().then((mod) => {
                blog_content = mod
            })
        }
    }

    for (const path in all_blog_meta) {
        if(path.includes(params.post)) {
            await all_blog_meta[path]().then((mod) => {
                blog_meta = JSON.parse(mod)
            })
        }
    }

    return {
        blog_content,
        blog_meta,
        blog_name : params.post
    }
}