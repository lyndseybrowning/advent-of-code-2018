const readInputFile = require('../readInputFile');
const sumFrequencies = require('./sumFrequencies');

const input = readInputFile(1).map(n => Number(n));
const solution = sumFrequencies(input);

console.log(solution);
