
import { error } from '@sveltejs/kit';

/** @type {import('../$types').PageServerLoad} */
export async function load({ params }) {

    let blog_meta = import.meta.glob('/src/data/blogs/*/*.json', {as: 'raw'});
    var meta = [];

    for (const path in blog_meta) {
        await blog_meta[path]().then((mod) => {
            let meta_data = JSON.parse(mod);
            const now = new Date();
            let publish_date = new Date(meta_data.publish_date);
            if (now > publish_date) {
                meta.push(meta_data)
            }
        })
    }

    meta.sort(function(a, b) {
        return (a.publish_date < b.publish_date) ? 1 : ((a.publish_date > b.publish_date) ? -1 : 0);
    });

    return {
        meta,
    }
}