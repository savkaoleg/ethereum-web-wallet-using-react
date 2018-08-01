import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Block from './Block'
import Loader from '../common/loader'

import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class Blocks extends Component {
  constructor (props) {
    super(props)
    this.state = {
      subscription: null
    }
  }

  componentDidMount (){
    const self = this
    const subscription = window.web3.eth.subscribe('newBlockHeaders', function (error, result){
      if (error){
        console.log(error)
      } else {
        const { blocks } = self.props.blocks;
        self.props.addData(result)

        if (blocks.length === 0){
          self.props.listenerConnected(true)
        }
      }
    })


    this.setState({subscription: subscription})

  }

  componentWillUnmount (){
    this.state.subscription.unsubscribe(function (error, success){
      if (success){
        console.log('Successfully unsubscribed!')
      }
    })
  }

  render () {
    const { connected, blocks } = this.props.blocks

    if (connected){
      return (
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          {blocks.map((block) =>
            <Block key={block.number} data={block}/>
          )}
        </ReactCSSTransitionGroup>
      )
    } else {
      return (
        <Loader text="Connecting to ethereum blockchain"/>
      )
    }

  }
}

Blocks.propTypes = {
  blocks: PropTypes.object
}

export default Blocks
