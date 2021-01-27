import { findById } from '../utils/utils.js';
import { pokemon } from '../data/data.js';

export function makeSeenArray(arrayOfObjects) {
    // make an empty array
    const seenArray = [];
    for (let item of arrayOfObjects) {
        // push every 'seen' into our new array
        seenArray.push(item.seen);
    }

    //  then return our new array with 'seen' items
    return seenArray;
}

export function makeCaughtArray(arrayOfObjects) {
    // make an empty array
    const caughtArray = [];

    // we loop through the argument array
    for (let item of arrayOfObjects) {
        // push every caught into our new array
        caughtArray.push(item.caught);
    }
    // then return the new array with caughts
    return caughtArray;
}

export function makeLabelsArray(arrayOfObjects) {

    // make an empty array
    const nameArray = [];

    // loop through argument array
    for (let item of arrayOfObjects) {
        const matchingName = findById(pokemon, item._id);
        // push every name into our new array
        nameArray.push(matchingName.pokemon);
        console.log(matchingName);
    }
    // then return our new array with names
    return nameArray;
}