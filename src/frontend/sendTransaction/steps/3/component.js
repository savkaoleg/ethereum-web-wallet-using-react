import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { Input, Button, Card, CardTitle, CardText } from 'react-toolbox'
import { Link } from 'react-router-dom'

class SubmitingTrans extends Component {
  constructor (props) {
    super(props)
    this.state = {
      subscription: null
    }
  }

  handleChange (name, value){
    this.props.handleChange(name, value)
  }

  confirm (){
    const self = this
    this.props.handleChange('key_confirmed', true)
    try {
      const account = window.web3.eth.accounts.privateKeyToAccount(this.props.sendTransation.private_key)
      if (account.address.toLowerCase() === this.props.sendTransation.address.toLowerCase()){
        this.props.handleChange('waiting_result', true)
        this.props.handleChange('private_key_err', '')
        window.web3.eth.accounts.signTransaction({
          to: this.props.sendTransation.to_address,
          value: Number(window.web3.utils.toWei(this.props.sendTransation.amount, 'ether')),
          gas: 42000
        }, this.props.sendTransation.private_key)
        .then(function (resut) {
          console.log('in then')
          window.web3.eth.sendSignedTransaction(resut.rawTransaction)
          .on('transactionHash', function (hash){
              self.props.handleChange('trx', hash)
          })
          .on('confirmation', function (confirmationNumber, receipt){
            console.log('confirmationNumber', confirmationNumber)
            self.props.handleChange('confNumber', confirmationNumber)
            console.log('receipt confirmation', receipt)
          })
          .on('error', function (error){
            console.error('error', error)
          })

        })
      } else {
        this.props.handleChange('private_key_err', 'private key not valid with your eth address')
      }
    } catch (e){
      if (e.message === 'Invalid hex string'){
        this.props.handleChange('private_key_err', 'private key not valid')
      }
    }
  }

  renderForm (){
    if (this.props.sendTransation.trx.length){
      return (
        <div>
        Success, trx id <Link to={'/transaction/' + this.props.sendTransation.trx}>{this.props.sendTransation.trx}</Link>,<br/> confirmation number {this.props.sendTransation.confNumber}
        </div>
      )
    } else {
      return (
        <div>
          <Input
              type='text'
              label='Private key'
              value={this.props.sendTransation.private_key}
              error={this.props.sendTransation.private_key_err}
              disabled={this.props.sendTransation.waiting_result}
              onChange={this.handleChange.bind(this, 'private_key')} />
          <Button
              disabled={this.props.sendTransation.waiting_result}
              onClick={this.confirm.bind(this)}
              style={{float: 'right'}}
              label={this.props.sendTransation.waiting_result ? 'Waiting' : 'Submit'}
              raised
              primary
            />
        </div>
      )
    }
  }

  render () {
    return (
        <Card style={{maxWidth: '700px', margin: '30px auto'}}>
          <CardTitle title={'Yout ballance ' + window.web3.utils.fromWei(this.props.sendTransation.ballance, 'ether') + ' ETH'} />
          <CardText>
            {this.renderForm()}
          </CardText>
        </Card>
    )
  }
}

SubmitingTrans.propTypes = {
  confirm: PropTypes.func,
  handleChange: PropTypes.func,
  sendTransation: PropTypes.object,
  web3: PropTypes.object
}

export default SubmitingTrans
