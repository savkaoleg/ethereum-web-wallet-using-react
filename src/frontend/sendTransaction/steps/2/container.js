import { connect } from 'react-redux'
import TwoStep from './component'
import { handleChange } from '../../actions'

const mapStateToProps = (state) => {
  return {
    sendTransation: state.sendTransation
  }
}

const mapDispatchToProps = dispatch => ({
    handleChange (name, value){
      dispatch(handleChange(name, value))
    },
    confirm (){
      this.props.history.push('/steps/3')
    }
})

const Container = connect(mapStateToProps, mapDispatchToProps)(TwoStep)

export default Container
