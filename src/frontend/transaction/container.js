import TransactionComponent from './component'
import { connect } from 'react-redux'
import { addFetchedData, addFetchedDataError, fetched } from './actions'

const mapStateToProps = (state) => {
  return {
    transaction: state.transaction
  }
}

const mapDispatchToProps = disptach =>
  ({
    addFetchedData (data) {
      disptach(
        addFetchedData(data)
      )
    },
    fetched (result){
      disptach(
        fetched(result)
      )
    },
    addFetchedDataError (error){
      disptach(
        addFetchedDataError(error)
      )
    }
  })


const Container = connect(mapStateToProps, mapDispatchToProps)(TransactionComponent)

export default Container
