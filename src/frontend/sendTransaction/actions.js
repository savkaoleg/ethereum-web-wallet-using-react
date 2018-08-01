import { CHANGE_ETH_ADDRESS, HANDLE_ADD_CHANGE } from './const'

export function handleChange (name, value) {
  return {
    type: HANDLE_ADD_CHANGE,
    name,
    value
  }
}

export function setEthAddress (value) {
  return {
    type: CHANGE_ETH_ADDRESS,
    name: 'address',
    value
  }
}

export function loadEthAddress () {
  return {
    type: CHANGE_ETH_ADDRESS,
    name: 'address',
    value: localStorage.getItem('address') || ''
  }
}
