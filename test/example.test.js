// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { makeSeenArray, makeCaughtArray, makeLabelsArray } from '../results/mungeUtils.js';

const test = QUnit.test;

const sampleData = [
    { _id: '5cef3501ef6005a77cd4fd1c', seen: 2, caught: 1 },
    { _id: '5cef3501ef6005a77cd4fd24', seen: 1, caught: 0 },
    { _id: '5cef3501ef6005a77cd4fd19', seen: 3, caught: 1 },
    { _id: '5cef3501ef6005a77cd4fd1b', seen: 3, caught: 0 },
    { _id: '5cef3501ef6005a77cd4fd25', seen: 3, caught: 1 },
    { _id: '5cef3501ef6005a77cd4fd23', seen: 6, caught: 0 }
];

test('makeSeenArray function should take in sampleData and return an array of numbers', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = [2, 1, 3, 3, 3, 6];

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = makeSeenArray(sampleData);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});


test('makeCaughtArray function should take in sampleData and return an array of numbers', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = [1, 0, 1, 0, 1, 0];

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = makeCaughtArray(sampleData);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});


test('makeLabelsArray function should take in sampleData and return an array of ids', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = ['5cef3501ef6005a77cd4fd1c', '5cef3501ef6005a77cd4fd24', '5cef3501ef6005a77cd4fd19', '5cef3501ef6005a77cd4fd1b', '5cef3501ef6005a77cd4fd25', '5cef3501ef6005a77cd4fd23'];

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = makeLabelsArray(sampleData);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});
