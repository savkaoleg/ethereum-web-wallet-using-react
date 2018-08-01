import { BLOCKS_ADD_DATA, BLOCKS_LISTENER_CONNECTED, BLOCKS_ADD_FATCHED_DATA_ERROR } from './const'

const initialState = {
  connected: false,
  error: '',
  blocks: []
}

export default function reducer (state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case BLOCKS_ADD_DATA:
      return Object.assign({}, state, {
        blocks: [
           payload,
           ...(state.blocks.slice(0, 9))
         ]
      })
    case BLOCKS_LISTENER_CONNECTED:
      return Object.assign({}, state, {
        ['connected']: payload
      })
    case BLOCKS_ADD_FATCHED_DATA_ERROR:
      return Object.assign({}, state, {
        ['error']: payload
      })
    default:
      return state
  }
}
