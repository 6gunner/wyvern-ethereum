/* global artifacts: false */

const TestToken = artifacts.require('./TestToken.sol')
const TestDAO = artifacts.require('./TestDAO.sol')
const TestStatic = artifacts.require('./TestStatic.sol')

const { setConfig } = require('./config.js')

module.exports = async (deployer, network) => {
  if (network === 'main') return
  await deployer.deploy(TestToken)
  const testToken = await TestToken.deployed()
  setConfig('deployed.' + network + '.TestToken', testToken.address)
  await deployer.deploy(TestDAO, TestToken.address)
  const testDao = await TestDAO.deployed()
  setConfig('deployed.' + network + '.TestDAO', testDao.address)
        // return deployer.deploy(TestStatic).then(() => {
        //   setConfig('deployed.' + network + '.TestStatic', TestStatic.address)
        // })
}
