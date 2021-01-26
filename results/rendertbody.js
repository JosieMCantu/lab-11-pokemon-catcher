
export function renderTableRow(poke) {

    const tr = document.createElement('tr');
    const nameTd = document.createElement('td');

    nameTd.textContent = poke.pokemon;

    const caughtTd = document.createElement('td');
    caughtTd.textContent = poke.caught;

    const seenTd = document.createElement('td');
    seenTd.textContent = poke.seen;

    tr.append(nameTd, caughtTd, seenTd);
    return tr;

}