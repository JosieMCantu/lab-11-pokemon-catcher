const POKESTATS = 'POKESTATS';
import { findById } from '../utils/utils.js';

/* const pokeStats = [
    {
        _id: 2345,
        caught: 2,
        seen: 5
    }
];
*/

export function getPokeStats() {
    let stats = JSON.parse(localStorage.getItem(POKESTATS));

    if (!stats) {
        stats = [];
        localStorage.setItem(POKESTATS, JSON.stringify(stats));
    }
    return stats;
}

export function setPokeStats(newStats) {
    localStorage.setItem(POKESTATS, JSON.stringify(newStats));
}

export function incrementSeen(_id) {
    const stats = getPokeStats();
    const poke = findById(stats, _id);
    if (!poke) {
        const newStat = {
            _id: _id,
            seen: 1,
            caught: 0
        };
        stats.push(newStat);
    } else {
        poke.seen++;
    }
    setPokeStats(stats);
}

export function incrementCaught(_id) {
    const stats = getPokeStats();
    const poke = findById(stats, _id);
    poke.caught++;
    setPokeStats(stats);
}
