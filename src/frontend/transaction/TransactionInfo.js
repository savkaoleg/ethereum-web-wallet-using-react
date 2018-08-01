import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { Card, CardTitle, CardText } from 'react-toolbox'
import '../stylesheets/error.scss'

class TransactionInfo extends Component {
  constructor (props) {
    super(props)
  }

  render (){

    console.log(this)

    const { blockHash, blockNumber, from, hash, to } = this.props

    return (
      <div style={{padding: '30px'}}>
        <Card className="card">
          <CardTitle title={hash} />
          <CardText>
            <p>blockHash: {blockHash}</p>
            <p>blockNumber: {blockNumber}</p>
            <p>from: {from}</p>
            <p>to: {to}</p>
          </CardText>
        </Card>
      </div>
    )
  }
}

TransactionInfo.propTypes = {
  blockHash: PropTypes.string,
  blockNumber: PropTypes.string,
  from: PropTypes.string,
  hash: PropTypes.string,
  to: PropTypes.string
}

export default TransactionInfo
