import {loadEthAddress} from '../sendTransaction/actions'

export default function bootstrap ({ dispatch }) {
  return () => {
     dispatch(loadEthAddress())
  }
}
