import { BLOCKS_ADD_DATA, BLOCKS_LISTENER_CONNECTED, BLOCKS_ADD_FATCHED_DATA_ERROR } from './const'


export function addData (payload) {
    return {
        type: BLOCKS_ADD_DATA,
        payload
    }
}

export function listenerConnected (payload) {
    return {
        type: BLOCKS_LISTENER_CONNECTED,
        payload
    }
}

export function addFetchedDataError (payload) {
    return {
        type: BLOCKS_ADD_FATCHED_DATA_ERROR,
        payload
    }
}