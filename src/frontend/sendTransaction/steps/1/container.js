import { connect } from 'react-redux'
import ethereum_address from 'ethereum-address'
import OneStep from './component'
import { handleChange, setEthAddress } from '../../actions'

const mapStateToProps = (state) => {
  return {
    sendTransation: state.sendTransation
  }
}

const mapDispatchToProps = dispatch => ({
    handleChange (name, value){
      if (ethereum_address.isAddress(value)){
        dispatch(setEthAddress(value)) //set new eth address to localStorage
        dispatch(handleChange('address_error', '')) //remove error message
      } else {
        dispatch(handleChange(name, value)) //change current eth address
        dispatch(handleChange('address_error', 'not valid eth address')) //show error
      }
    },
    confirm (){
      const self = this
      window.web3.eth.getBalance(this.props.sendTransation.address).then((resp, err)=>{
        if (!err){
          dispatch(handleChange('ballance', resp))
          self.props.history.push('/steps/2')
        } else {
          console.log(err)
        }
      })
    }
})

const Container = connect(mapStateToProps, mapDispatchToProps)(OneStep)

export default Container
