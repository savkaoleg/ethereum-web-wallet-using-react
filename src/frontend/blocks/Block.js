import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { Card, CardTitle, Button, CardText } from 'react-toolbox'
import moment from 'moment'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import '../stylesheets/common.scss'

class Block extends Component {
  constructor (props) {
    super(props)
    const { timestamp } = this.props.data
    const diff = this.findDiff(timestamp)
    this.state = {
      moreInfo: false,
      diff: diff
    }

    this.toggleMoreInfo = this.toggleMoreInfo.bind(this)
    this.findDiff = this.findDiff.bind(this)
  }

  componentDidMount (){
    const { timestamp } = this.props.data
    const self = this
    const timerId = setInterval(() => self.setState({diff: self.findDiff(timestamp)}), 1000)
    this.setState({timerId: timerId})
  }

  componentWillUnmount (){
    clearInterval(this.state.timerId)
  }

  findDiff (timestamp){
    const now = moment()
    const created = moment.unix(timestamp)
    const diff = now.diff(created, 'seconds')
    if (diff >= 0){
      return diff
    } else {
      return 0
    }
  }

  toggleMoreInfo (){
    this.setState({
      moreInfo: !this.state.moreInfo
    })
  }

  render () {

    const { number, difficulty, extraData, gasLimit, gasUsed, hash, nonce, parentHash } = this.props.data
    const { diff } = this.state

    return (
      <Card className="blockCard">
        <CardTitle
          className="blockCardTitle"
          title={'#' + number}
          subtitle={(diff > 0) ? diff + ' seconds ago' : '...'}
        />
        <ReactCSSTransitionGroup
          transitionName="example1"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
        {
          this.state.moreInfo ? (
              <CardText className="example1">
                <p><i>difficulty:</i> {difficulty}</p>
                <p><i>extraData:</i> {extraData}</p>
                <p><i>gasLimit:</i> {gasLimit}</p>
                <p><i>gasUsed:</i> {gasUsed}</p>
                <p><i>hash:</i> {hash}</p>
                <p><i>nonce:</i> {nonce}</p>
                <p><i>parentHash:</i> {parentHash}</p>
              </CardText>) : null
        }
        </ReactCSSTransitionGroup>
        <Button
          onClick={this.toggleMoreInfo}
          className="moreInfoBtn"
          icon={this.state.moreInfo ? 'arrow_drop_up' : 'arrow_drop_down'}
          floating
          accent
          mini
        />
      </Card>
    )
  }
}

Block.propTypes = {
  data: PropTypes.object
}

export default Block
