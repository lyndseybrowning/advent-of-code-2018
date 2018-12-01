const sumFrequencies = require('./sumFrequencies');

it('should return the sum of positive and negative frequencies', () => {
    const frequencies = [+4, -2, -2, +10, -20];
    const actual = sumFrequencies(frequencies);
    const expected = -10;

    expect(actual).toEqual(expected);
});
