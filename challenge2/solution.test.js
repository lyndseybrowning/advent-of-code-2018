const { checksum, commonBoxId } = require('./solution');

describe('challenge 2', () => {
    test('checksum multiplies instances of letters repeated twice against instances of letters repeated three times', () => {
        const input = [
            'abcdef',
            'bababc',
            'abbcde',
            'abcccd',
            'aabcdd',
            'abcdee',
            'ababab',
        ];
        const actual = checksum(input);
        const expected = 12; // 4 * 3

        expect(actual).toEqual(expected);
    });

    test('commonBoxId returns common letters between the two box IDs that differ by only one character', () => {
        const input = [
            'abcde',
            'fghij',
            'klmno',
            'pqrst',
            'fguij',
            'axcye',
            'wvxyz',
        ];

        const actual = commonBoxId(input);
        const expected = 'fgij';

        expect(actual).toEqual(expected);
    });
});
