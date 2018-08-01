import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Motion, spring} from 'react-motion'
import './loader.scss'

class Loader extends Component {
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
    return (
      <Motion
        defaultStyle={{opacity: 0}}
        style={{opacity: spring(this.state.loaded ? 1 : 0)}}>
        {({opacity}) => (
        <div className="showbox" style={{opacity: `${opacity}`}}>
          <div className="loader">
            <svg className="circular" viewBox="25 25 50 50">
              <circle className="path" cx="50" cy="50" r="20" fill="none" strokeWidth="2" strokeMiterlimit="10"/>
            </svg>
          </div>
          <h3 className="loader-title">{this.props.text}</h3>
        </div>
      )}
      </Motion>
    )
  }
}

Loader.propTypes = {
  text: PropTypes.string
}

export default Loader
