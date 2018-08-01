import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Loader from '../common/loader'
import ErrorMessage from './ErrorMessage'
import TransactionInfo from './TransactionInfo'
import Web3 from '../../lib/web3'
const web3 = new Web3()
web3.setProvider(new web3.providers.HttpProvider('https://mainnet.infura.io/ETH'))

class Transaction extends Component {
	constructor (props) {
		super(props)
		const self = this
			web3.eth.getTransaction(this.props.match.params.id)
			.then(function (result){
				self.props.fetched(true)
				self.props.addFetchedData(result)

			}, function (e){
				self.props.fetched(true)
				self.props.addFetchedDataError(e.message)

			})
	}

	render () {
		console.log(this)
		const { fetched, error } = this.props.transaction
		if (fetched){
			if (error){
				return (<ErrorMessage
						title={error}
						text={error}
					/>)
			} else {
				return (
					<TransactionInfo
						{...this.props.transaction}
					/>
				)
			}
		} else {
			return (<Loader text="Connecting to ethereum blockchain"/>)
		}
	}
}

Transaction.propTypes = {
  match: PropTypes.object,
  transaction: PropTypes.object
}

export default Transaction
