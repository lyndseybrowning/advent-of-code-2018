const { overlappingClaims } = require('./solution');

describe('challenge 3', () => {
    test('overlappingClaims returns the number of squares overlapped by two or more claims', () => {
        const input = ['#1 @ 1,3: 4x4', '#2 @ 3,1: 4x4', '#3 @ 5,5: 2x2'];
        const actual = overlappingClaims(input).numOverlappingClaims;
        const expected = 4;

        expect(actual).toEqual(expected);
    });

    test('nonOverlapping claim returns the claim that doesnt overlay any other claim', () => {
        const input = ['#1 @ 1,3: 4x4', '#2 @ 3,1: 4x4', '#3 @ 5,5: 2x2'];
        const actual = overlappingClaims(input).nonOverlappingClaim;
        const expected = '#3';

        expect(actual).toEqual(expected);
    });
});
