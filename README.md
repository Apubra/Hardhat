# Hardhat
Install Node Project
npm init -y

Now we need to install hardhat as a development dependency
npm install -D hardhat
npm install --save-dev @nomicfoundation/hardhat-toolbox

Then run the hardhat utility that will create the empty hardhat project for you.
npx hardhat init

Test hardhat command if everything fine.
npx hardhat

You can see different task command.

Now install related dependency.
npm install -D @nomicfoundation/hardhat-ethers
npm i ethereum-waffle
npm i @nomicfoundation/hardhat-chai-matchers

# Writing smart contracts
Start by creating a new directory called contracts and create a file inside the directory called Token.sol

# Compiling contracts
npx hardhat compile

To compile the contract run npx hardhat compile in your terminal. The compile task is one of the built-in tasks.

# Testing contracts
Create a new directory called test inside our project root directory and create a new file in there called Token.js

In your terminal run-
npx hardhat test

# Debugging with Hardhat Network
When running your contracts and tests on Hardhat Network you can print logging messages and contract variables calling console.log() from your Solidity code. To use it you have to import "../node_modules/hardhat/console.sol"; in your contract code.

# Deploying to a live network
Let's create a new directory scripts inside the project root's directory
Then run the following command-
npx hardhat run scripts/deploy.js

That will deploy the contract in hardhat local network.

# Deploying to remote networks
Run the following command-
npx hardhat run scripts/deploy.js --network sepolia

We have deploy our contract in sepolia Network
Same way we can deploy in to the MainNetwork.

