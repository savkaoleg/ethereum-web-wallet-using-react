import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import bootstrap from './hooks/bootstrap'
import Routes from './routes'

import Web3 from '../lib/web3'
const ws_provider = 'wss://mainnet.infura.io/ws'
const web3 = new Web3(new Web3.providers.WebsocketProvider(ws_provider))
window.web3 = web3

const rootEl = document.getElementById('app')

const store = configureStore()
bootstrap(store)()

const render = () => {
  ReactDOM.render(
    <BrowserRouter>
      <Provider store={store} >
          <Routes/>
      </Provider>
    </BrowserRouter>,
    rootEl
  )
}

render()
