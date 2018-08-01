import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { Card, CardTitle, CardText } from 'react-toolbox'
import '../stylesheets/error.scss'

class ErrorMessage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loaded: false
    }
  }

  componentDidMount (){
    this.setState({
      loaded: true
    })
  }

  componentWillUnmount (){
    this.setState({
      loaded: false
    })
  }

  render (){

    const { text } = this.props
    const { loaded } = this.state

    return (
      <Card className={'errorcard ' + (loaded ? 'show' : '')} >
        <CardTitle title='Transaction not found' />
        <CardText>
          {text}
        </CardText>
      </Card>
    )
  }
}

ErrorMessage.propTypes = {
  text: PropTypes.object
}

export default ErrorMessage
