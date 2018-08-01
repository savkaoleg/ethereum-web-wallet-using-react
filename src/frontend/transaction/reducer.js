import { FETCH_DATA, FETCHED_FATA, ADD_FATCHED_DATA_ERROR } from './const'
const initialState = {
  fetched: false,
  error: ''
}

export default function reducer (state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case FETCH_DATA:
      return Object.assign({}, state, {
        ...payload
      })
    case FETCHED_FATA:
      return Object.assign({}, state, {
        ['fetched']: payload
      })
    case ADD_FATCHED_DATA_ERROR:
      return Object.assign({}, state, {
        ['error']: payload
      })
    default:
      return state
  }
}
