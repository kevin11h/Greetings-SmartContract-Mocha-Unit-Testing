const path = require('path');
const greetingsPath = path.resolve(__dirname, 'contracts', 'Greetings.sol');

const fs = require('fs');
const solc = require('solc');

const source = fs.readFileSync(greetingsPath, 'utf8');

console.log(solc.compile(source, 1)).contracts[':Greetings'];  // 1 represents the number of contracts to compile


