const sumFrequencies = frequencies => {
    return frequencies.reduce((sum, cur) => (sum += cur), 0);
};

module.exports = sumFrequencies;
