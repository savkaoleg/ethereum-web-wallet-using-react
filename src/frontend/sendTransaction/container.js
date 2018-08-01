import React from 'react'
import { Switch, Route } from 'react-router-dom'
import One from './steps/1/container'
import Two from './steps/2/container'
import Three from './steps/3/container'

const sendTransactionsRouter = () => (
  <Switch>
    <Route exact path='/steps/1' component={One}/>
    <Route path='/steps/2' component={Two}/>
    <Route path='/steps/3' component={Three}/>
  </Switch>
)


export default sendTransactionsRouter
