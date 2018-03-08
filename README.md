![Project Wyvern Logo](https://media.githubusercontent.com/media/ProjectWyvern/wyvern-branding/master/logo/logo-square-red-transparent-200x200.png?raw=true "Project Wyvern Logo")

## Project Wyvern Ethereum Smart Contracts

[![https://badges.frapsoft.com/os/mit/mit.svg?v=102](https://badges.frapsoft.com/os/mit/mit.svg?v=102)](https://opensource.org/licenses/MIT) [![Build Status](https://travis-ci.org/ProjectWyvern/wyvern-ethereum.svg?branch=master)](https://travis-ci.org/ProjectWyvern/wyvern-ethereum) [![Coverage Status](https://coveralls.io/repos/github/ProjectWyvern/wyvern-ethereum/badge.svg?branch=master)](https://coveralls.io/github/ProjectWyvern/wyvern-ethereum?branch=master)

<a href="https://gitcoin.co/explorer/?q=https://github.com/ProjectWyvern/wyvern-ethereum" title=”Push Open Source Forward”>
  <img src='https://gitcoin.co/static/v2/images/promo_buttons/slice_01.png' alt=’Browse Gitcoin Bounties’ width="267px" height="52px"/>
</a>

### Synopsis

*Autonomously governed decentralized digital asset exchange.*

These are the Ethereum smart contracts for the Wyvern Protocol, the Wyvern ERC20 token (WYV), and the Wyvern DAO. For general information on the Wyvern project, please see [the website](https://projectwyvern.com).

### Deployed Contracts

*Please note: correct deployed contract addresses will always be in config.json. If you wish to import this repository directly, please use that file. The addresses in Truffle build output are not necessarily accurate.*

#### Mainnet

[Wyvern Exchange (latest, by ENS)](https://etherscan.io/address/wyvernexchange.eth)

[Wyvern Exchange v2](https://etherscan.io/address/0xb5aa1fb7027290d6d5cbbe3b1aecd5317fa582ec)

[Wyvern Exchange v1](https://etherscan.io/address/0xf14f06e227C015b398b8069314F4B8d1d7022c9e)

[Wyvern Atomicizer](https://etherscan.io/address/wyvernatomicizer.eth)

[Wyvern DAO Proxy](https://etherscan.io/address/wyverndaoproxy.eth)

[Wyvern Token Transfer Proxy](https://etherscan.io/address/0x9a33a92b408b07d3be90e9828731b21a7d794af4)

[Wyvern Proxy Registry](https://etherscan.io/address/wyvernproxyregistry.eth)

[Wyvern Token](https://etherscan.io/address/wyverntoken.eth)

[Wyvern DAO](https://etherscan.io/address/wyverndao.eth)

#### Rinkeby Testnet

[Wyvern Exchange](https://rinkeby.etherscan.io/address/0x62ee01ead092092f530bf5daba8d400fb33a5552)

[Wyvern Atomicizer](https://rinkeby.etherscan.io/address/0x147b37da892e4dd6442c4bf640126bad32ec90e9)

[Wyvern DAO Proxy](https://rinkeby.etherscan.io/address/0x2a86feeada21162d49ded01c8829be6617e819a3)

[Wyvern Token Transfer Proxy](https://rinkeby.etherscan.io/address/0xd0f8606bb69e8b898b3643d06755a27a42e93ae0)

[Wyvern Proxy Registry](https://rinkeby.etherscan.io/address/0xfcd04fb983ca034bb9c4c4429d1b52e78a867425)

[Wyvern Token](https://rinkeby.etherscan.io/address/0xd1be358dab323802a3c469b0787476fdcb8af5d6)

[Wyvern DAO](https://rinkeby.etherscan.io/address/0x1b4c767502d01deee83af491c946b469e0620e30)

### Development Information

#### Setup

[Node >= v8](https://nodejs.org/en/) and [Yarn](https://yarnpkg.com/en/) required.

Before any development, install the required NPM dependencies:

```bash
yarn
```

#### Testing

Start Ethereum's testrpc tool to provide a Web3 interface (leave this running):

```bash
yarn testrpc
```

Compile the latest smart contracts:

```bash
yarn compile
```

Run the testsuite against the simulated network:

```bash
yarn test
```

Make sure to lint the Solidity files once you're done:

```bash
yarn lint
```

#### Generating Documentation

Install the dependencies:

```bash
cd doxity
yarn
cd ..
```

Autogenerate documentation from Ethereum Natspec using [Doxity](https://github.com/DigixGlobal/doxity):

```bash
yarn doc
```

Final output will be written to [docs](docs), which will be automatically published on push to GitHub Pages at [docs.projectwyvern.com](https://docs.projectwyvern.com).

#### Misc

Run automated smart contract analysis (requires [Oyente](https://github.com/melonproject/oyente) and [Mythril](https://github.com/ConsenSys/mythril)):

```bash
yarn analyze
```

Flatten contract source (for e.g. Etherscan verification, requires [solidity-flattener](https://github.com/BlockCatIO/solidity-flattener) to be installed):
```bash
yarn flatten
```

#### Contributing

Contributions welcome! Please use GitHub issues for suggestions/concerns - if you prefer to express your intentions in code, feel free to submit a pull request.
