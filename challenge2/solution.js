const checksum = input => {
    const initialInstances = {
        twos: 0,
        threes: 0,
    };

    const incrementCharacterMap = (map, char) => {
        if (map[char]) {
            map[char] += 1;
        } else {
            map[char] = 1;
        }

        return map;
    };

    const getInstancesOf = map => times => {
        const instancesFound = Object.keys(map).find(key => map[key] === times);

        return instancesFound ? 1 : 0;
    };

    const instances = input.reduce((acc, chars) => {
        const characterMap = Array.from(chars).reduce(
            incrementCharacterMap,
            {},
        );

        const instancesOf = getInstancesOf(characterMap);
        const counts = {
            twos: (acc.twos += instancesOf(2)),
            threes: (acc.threes += instancesOf(3)),
        };

        return counts;
    }, initialInstances);

    return instances.twos * instances.threes;
};

const commonBoxId = input => {
    const getCommonChars = (commonBox, box) => {
        return Array.from(commonBox).reduce((commonChars, char, index) => {
            if (char === box[index]) {
                commonChars += char;
            }

            return commonChars;
        }, '');
    };

    for (let i = 0; i < input.length; i++) {
        const box = input[i];

        const restOfBoxes = input.filter(i => i !== box);
        const commonBoxId = boxId => {
            const boxChars = Array.from(boxId);
            const diff = boxChars.reduce((count, char, index) => {
                return char === box[index] ? count : ++count;
            }, 0);

            return diff === 1;
        };

        const commonBox = restOfBoxes.find(commonBoxId);

        if (commonBox) {
            return getCommonChars(commonBox, box);
        }
    }
};

const readInputFile = require('../readInputFile');
const input = readInputFile(2);

console.log(checksum(input));
console.log(commonBoxId(input));

module.exports = { checksum, commonBoxId };
