import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { Card, CardTitle, CardText, Input, Button } from 'react-toolbox'
import ethereum_address from 'ethereum-address'

const formatBalance = ballance => window.web3.utils.fromWei(ballance)

class Comp extends Component {
  constructor (props) {
    super(props)
    console.log('this.props', this.props)
    this.renderForm = this.renderForm.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (name, value){
      if (name === 'amount'){
        if (value > formatBalance(this.props.sendTransation.ballance)){
          this.props.handleChange('amount_err', 'Amount is bigger that ballance')
        } else {
          this.props.handleChange('amount_err', '')
        }
      }
      if (name === 'to_address'){
        if (ethereum_address.isAddress(value)){
          this.props.handleChange('to_address_error', '')
        } else {
          this.props.handleChange('to_address_error', 'Not valid eth address')
        }
      }
      this.props.handleChange(name, value)
  }

  renderForm (){
    if (formatBalance(this.props.sendTransation.ballance) > 0){
      return (
        <div>
          <Input
              type='text'
              label='Address'
              value={this.props.sendTransation.to_address}
              error={this.props.sendTransation.to_address_error}
              onChange={this.handleChange.bind(this, 'to_address')} />
          <Input
              type='text'
              label='Amount'
              value={this.props.sendTransation.amount}
              error={this.props.sendTransation.amount_err}
              onChange={this.handleChange.bind(this, 'amount')} />
          <Button
              onClick={this.props.confirm.bind(this)}
              disabled={!ethereum_address.isAddress(this.props.sendTransation.address) || (this.props.sendTransation.amount < 0) || (this.props.sendTransation.amount_err.length !== 0)}
              style={{float: 'right'}}
              label='Next'
              raised
              primary
            />
        </div>
      )
    } else {
      return null
    }
  }

  render () {
    return (
        <Card style={{maxWidth: '700px', margin: '30px auto'}}>
          <CardTitle title={(formatBalance(this.props.sendTransation.ballance) > 0) ? 'Yout ballance ' + formatBalance(this.props.sendTransation.ballance) + ' ETH' : 'Loading ballance ...'} />
          <CardText>
            {this.renderForm()}
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
