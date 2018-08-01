import { CHANGE_ETH_ADDRESS, HANDLE_ADD_CHANGE } from './const'

const initialState = {
  address: '',
  address_error: '',
  ballance: '',
  amount: 0,
  amount_err: '',
  to_address: '',
  to_address_error: '',
  private_key: '',
  private_key_err: '',
  waiting_result: false,
  trx: '',
  confNumber: 0,
  key_confirmed: false
}

export default function sendTransation (state = initialState, action) {
  switch (action.type) {
    case CHANGE_ETH_ADDRESS:
      return Object.assign({}, state, {
        [action.name]: action.value
      })
    case HANDLE_ADD_CHANGE:
      return Object.assign({}, state, {
        [action.name]: action.value
      })
    default:
      return state
  }
}
