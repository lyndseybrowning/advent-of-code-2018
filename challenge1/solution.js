const sumFrequencies = frequencies => {
    return frequencies.reduce((sum, cur) => (sum += cur), 0);
};

const findDuplicatedFrequency = input => {
    let frequency = 0;
    const frequencies = [0];
    const find = () => {
        for (let i = 0; i < input.length; i++) {
            frequency += input[i];

            if (frequencies.includes(frequency)) return frequency;

            frequencies.push(frequency);
        }

        return find();
    };

    return find(input);
};

module.exports = { sumFrequencies, findDuplicatedFrequency };
