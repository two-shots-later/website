import { error } from '@sveltejs/kit';

/** @type {import('../$types').PageServerLoad} */
export async function load({ params }) {

    let game_data = import.meta.glob('/src/data/games/*.json', {as: 'raw'});
    var games = [];

    for (const path in game_data) {
        await game_data[path]().then((mod) => {
            games.push(JSON.parse(mod))
        })
    }
    
    return {
        games,
    }
}