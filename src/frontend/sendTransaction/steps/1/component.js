import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { Button, Input, Card, CardTitle, CardText } from 'react-toolbox'
import ethereum_address from 'ethereum-address'


class Comp extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <Card style={{maxWidth: '700px', margin: '30px auto'}}>
        <CardTitle title="Please, type your ath address"/>
        <CardText>
          <Input
            type='text'
            label='Address'
            error={this.props.sendTransation.address_error}
            value={this.props.sendTransation.address}
            onChange={this.props.handleChange.bind(this, 'address')} />
          <Button
            onClick={this.props.confirm.bind(this)}
            disabled={!ethereum_address.isAddress(this.props.sendTransation.address)}
            style={{float: 'right'}}
            label='Next'
            raised
            primary
          />
        </CardText>
      </Card>
    )
  }
}

Comp.propTypes = {
  confirm: PropTypes.func,
  handleChange: PropTypes.func,
  sendTransation: PropTypes.object
}

export default Comp
