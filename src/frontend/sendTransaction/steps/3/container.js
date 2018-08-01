import { connect } from 'react-redux'
import ThreeStep from './component'
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
      // this.props.history.push('/steps/3')
    }
})

const Container = connect(mapStateToProps, mapDispatchToProps)(ThreeStep)

export default Container
