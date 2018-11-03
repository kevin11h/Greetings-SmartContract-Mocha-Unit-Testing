const assert = require('assert'); // standard library in Node.js
const ganache= require('ganache-cli'); // local Ethereum network
const Web3 = require('web3');  // uppercase variable because used as a constructor to create instance of web3 library

const web3 = new Web3(ganache.provider()); // Web3 Constructor creates instance

const { interface, bytecode } = require('../compile'); // use ABI, *interface* and  *bytecode* properties of compiled smart contract object

let accounts;
let greetings

beforeEach(async () => {

  accounts = await web3.eth.getAccounts();
  greetings = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({  data: bytecode, arguments: ['Hello World'] })
    .send({from: accounts[0], gas:'1000000'})
//  console.log(accounts);
});

describe('Greetings', () => {

  it('deploys a greetings contract', () => {
    console.log(greetings);
    assert.ok(greetings.options.address); // hold the reference to our greetings contract instance, options / address property where we deployed the contract
  });

  it('has a default message', async () => {
    const message = await greetings.methods.message().call();
    assert.equal(message, 'Hello World')
  });


  it('can change the message', async () => {
    await greetings.methods.setMessage('Hello Avengers').send({ from: accounts[0] } )

    const message = await greetings.methods.message().call();

    assert.equal(message, 'Hello Avengers');

  });
});
