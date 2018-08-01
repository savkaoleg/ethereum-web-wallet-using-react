import { connect } from 'react-redux'
import { addData, listenerConnected, addFetchedDataError } from './actions'
import blocksComponent from './component'

const mapStateToProps = (state) => {
  return {
    blocks: state.blocks
  }
}

const mapDispatchToProps = disptach =>
  ({
    addData (data) {
      disptach(
        addData(data)
      )
    },
    listenerConnected (result){
      disptach(
        listenerConnected(result)
      )
    },
    addFetchedDataError (error){
      disptach(
        addFetchedDataError(error)
      )
    }
  })

const Container = connect(mapStateToProps, mapDispatchToProps)(blocksComponent)

export default Container
