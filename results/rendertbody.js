import { findById } from '../utils/utils.js';
import { pokemon } from '../data/data.js';

export function renderTableRow(poke) {
    const matchingName = findById(pokemon, poke._id);
    const tr = document.createElement('tr');
    const nameTd = document.createElement('td');
    nameTd.textContent = matchingName.pokemon;

    const caughtTd = document.createElement('td');
    caughtTd.textContent = poke.caught;

    const seenTd = document.createElement('td');
    seenTd.textContent = poke.seen;

    tr.append(nameTd, caughtTd, seenTd);
    return tr;

}