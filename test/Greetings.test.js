const assert = require('assert'); // standard library in Node.js
const ganache= require('ganache-cli'); // local Ethereum network
const Web3 = require('web3');  // uppercase variable because used as a constructor to create instance of web3 library

const web3 = new Web3(ganache.provider()); // Web3 Constructor creates instance

beforeEach(() => {
  web3.eth.getAccounts().then(fetchedAccounts => {
    console.log(fetchedAccounts);
  });
});

describe('Greetings', () => {
  it('dummy test', () => {
  });
});
