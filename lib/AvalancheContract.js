import { ethers } from 'ethers'
import DocsContract from '../contract/Docs.json'

const CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_AVALANCHE_CONTRACT
const NETWORK_ADDRESS = process.env.NEXT_PUBLIC_AVALANCHE_NETWORK

const WALLET_KEY = process.env.WALLET_KEY

const createReadWrite = () => {
  const provider = new ethers.providers.JsonRpcProvider(NETWORK_ADDRESS)
  const wallet = new ethers.Wallet(WALLET_KEY, provider)

  return {
    r: new ethers.Contract(CONTRACT_ADDRESS, DocsContract, provider),
    rw: new ethers.Contract(CONTRACT_ADDRESS, DocsContract, wallet)
  }
}

const createReadOnly = () => {
  const provider = new ethers.providers.JsonRpcProvider(NETWORK_ADDRESS)

  return {
    r: new ethers.Contract(CONTRACT_ADDRESS, DocsContract, provider)
  }
}

export default { createReadWrite, createReadOnly }
