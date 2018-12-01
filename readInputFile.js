const fs = require('fs');

const readInputFile = (day, file = './input.txt') => {
    const data = fs
        .readFileSync(`./challenge${day}/${file}`, 'utf8')
        .split('\n')
        .filter(Boolean);

    return data;
};

module.exports = readInputFile;
