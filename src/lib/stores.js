import { writable } from 'svelte/store'
import { makeContractStore } from 'svelte-web3'
import ERC721ABI from '../abis/ERC721ABI.json'

export const ERC721ContractAddress = ''
export const ERC721ContractABI = ERC721ABI

// Persistent web3 - for when MM isn't connected
export const persistentWeb3 = writable()
export const persistentWeb3Connected = writable(false)
export const persistentERC721Contract = writable()

// Browser web3 contracts
export var connectedERC721Contract = makeContractStore(ERC721ABI, MTWERC721ContractAddress)