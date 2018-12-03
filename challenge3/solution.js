const toNumber = item => Number(item);

const overlappingClaims = input => {
    let nonOverlappingClaim = '';
    const fabric = [];
    const numOverlappingClaims = input.reduce((numOverlaps, claim) => {
        const [data, size] = claim.split(':');
        const [width, height] = size.split('x').map(toNumber);
        const coords = data.split(' ');
        const [claimName] = coords;
        const [row, col] = coords[2].split(',').map(toNumber);

        const numCols = row + width;
        const numRows = col + height;

        let rowCount = 0;
        let claimCoverage = 0;

        for (rowCount; rowCount < numRows; rowCount++) {
            fabric[rowCount] = fabric[rowCount] || [0];

            for (let colCount = 0; colCount < numCols; colCount++) {
                fabric[rowCount][colCount] = fabric[rowCount][colCount] || 0;

                if (rowCount >= col && colCount >= row) {
                    if (fabric[rowCount][colCount] === 0) {
                        claimCoverage += 1;
                    }

                    fabric[rowCount][colCount] += 1;

                    if (fabric[rowCount][colCount] === 2) {
                        numOverlaps += 1;
                    }
                }
            }
        }

        if (claimCoverage === width * height) {
            nonOverlappingClaim = claimName;
        }

        return numOverlaps;
    }, 0);

    return {
        numOverlappingClaims,
        nonOverlappingClaim,
    };
};

const readInputFile = require('../readInputFile');
const input = readInputFile(3);

//console.log(overlappingClaims(input).nonOverlappingClaim);

module.exports = { overlappingClaims };
