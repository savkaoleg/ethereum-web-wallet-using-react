import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers/'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'

const loggerMiddleware = createLogger({collapsed: (state, action) => {
  if (action.type === 'CREATE_ITEM') {
    return false
  } else {
    return true
  }
}})

const ethAddressMiddleware = store => next => action => {
  if (action.type === 'CHANGE_ETH_ADDRESS') {
    if (localStorage.getItem('address') !== action.value) {
      localStorage.setItem('address', action.value)
    }
  }
  next(action)
}

const createStoreWithMiddleware = composeWithDevTools(applyMiddleware(
  thunkMiddleware,
  loggerMiddleware,
  ethAddressMiddleware
))(createStore)

export default function configureStore (initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState)

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
