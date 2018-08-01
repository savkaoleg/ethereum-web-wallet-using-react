import { combineReducers } from 'redux'
import sendTransation from '../sendTransaction/reducer'
import transaction from '../transaction/reducer'
import blocks from '../blocks/reducer'

const rootReducer = combineReducers({
  sendTransation,
  transaction,
  blocks
})

export default rootReducer
