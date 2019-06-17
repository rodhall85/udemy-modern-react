import _ from 'lodash';
import { 
    EDIT_STREAM, 
    FETCH_STREAMS, 
    FETCH_STREAM, 
    DELETE_STREAM, 
    CREATE_STREAM 
} from "../actions/types";
import streams from '../apis/streams';

const streamsReducer = (state={}, action) => {
    switch (action.type) {
        case FETCH_STREAMS:
            return { ...state, ..._.mapKeys(action.payload, 'id') };
        case FETCH_STREAM:
            return { ...state, [action.payload.id]: action.payload };
        case CREATE_STREAM:
            return { ...state, [action.payload.id]: action.payload };
        case EDIT_STREAM:
            return { ...state, [action.payload.id]: action.payload };
        case DELETE_STREAM:
            return _.omit(state, action.payload);
        default:
            return state;
    }
};

export default streamsReducer;