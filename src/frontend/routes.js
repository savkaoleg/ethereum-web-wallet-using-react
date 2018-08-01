import React from 'react'
import { Switch, Route } from 'react-router-dom'
import PagNotFound from './component/PagNotFound'
import Transaction from './transaction/container'
import sendTransaction from './sendTransaction/container'
import blocks from './blocks/container'
import { AppBar, Navigation } from 'react-toolbox'
import { Link } from 'react-router-dom'
import './stylesheets/common.scss'

const Routes = () =>
  <div>
    <AppBar title='ETH siple wallet'>
      <Navigation type='horizontal' className="mainNav">
        <Link to='/'>Home</Link>
        <Link to='/steps/1'>Send ETH</Link>
      </Navigation>
    </AppBar>
    <Switch>
      <Route exact path='/' component={blocks}/>
      <Route path='/steps/:id' component={sendTransaction}/>
      <Route path='/transaction/:id' component={Transaction}/>
      <Route path='/*' component={PagNotFound}/>
    </Switch>
  </div>

export default Routes
