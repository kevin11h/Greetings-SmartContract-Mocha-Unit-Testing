Project Directory Structure

contracts (folder containing our Solidity contract source code file, can contain more than one contract)
-  Greetings.sol

test (folder containing our test scripts written in Mocha code)
-  Greetings.test.js

package.json (file to record different dependencies installed in our project)
compile.js (script file to compile each of the contracts inside 'contracts' directory)
deploy.js (deployment file to Ethereum network)



Web Resources, Networks and APIs
+  infura.io
+  faucet.rinkeby.io/
+  rinkeby.etherscan.io (insert your account address!)
+  web3js.readthedocs.io/en/1.0/web3-eth-contract.html

Installations

+  npm install --save truffle-hdwallet-provider
+  npm install --save mocha ganache-cli web3@1.0.0-beta.34
+  npm install --save solc
+  npm run test
+  npm install --save web3@1.0.0-beta.34

Commands

+  node deploy



