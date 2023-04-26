
import { error } from '@sveltejs/kit';

/** @type {import('../$types').PageServerLoad} */
export async function load({ params }) {

    let blog_meta = import.meta.glob('/src/data/blogs/*/*.json', {as: 'raw'});
    var meta = [];

    for (const path in blog_meta) {
        await blog_meta[path]().then((mod) => {
            meta.push(JSON.parse(mod))
        })
    }

    return {
        meta,
    }
}