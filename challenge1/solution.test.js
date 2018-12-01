const { sumFrequencies, findDuplicatedFrequency } = require('./solution');

describe('challenge 1', () => {
    test('sumFrequencies should return the sum of positive and negative frequencies', () => {
        const frequencies = [+4, -2, -2, +10, -20];
        const actual = sumFrequencies(frequencies);
        const expected = -10;

        expect(actual).toEqual(expected);
    });

    test('firstDuplicatedFrequency should return the first frequency that is reached twice', () => {
        const frequencies = [+1, -1];
        const actual = findDuplicatedFrequency(frequencies);
        const expected = 0;

        expect(actual).toEqual(expected);
        expect(findDuplicatedFrequency([+3, +3, +4, -2, -4, +3, +3])).toEqual(
            10,
        );
    });

    test('firstDuplicatedFrequency will reloop if no duplicated frequency is found', () => {
        const frequencies = [3, 3, 4, -2, -4];
        const actual = findDuplicatedFrequency(frequencies);
        const expected = 10;

        expect(actual).toEqual(expected);
    });
});
