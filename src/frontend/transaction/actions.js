import { FETCH_DATA, FETCHED_FATA, ADD_FATCHED_DATA_ERROR } from './const'

export function addFetchedData (payload) {
    return {
        type: FETCH_DATA,
        payload
    }
}

export function fetched (payload) {
    return {
        type: FETCHED_FATA,
        payload
    }
}

export function addFetchedDataError (payload) {
    return {
        type: ADD_FATCHED_DATA_ERROR,
        payload
    }
}
