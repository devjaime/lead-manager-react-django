import { GET_LEADS, DELETE_LEAD } from '../actions/types.js';
import { bindActionCreators } from 'redux';
const initialState = {
    leads: []
}

export default function(state = initialState, action) {
    switch(action.type){
        case GET_LEADS:
            return{
                ...state,
                leads:action.payload

            };
        case DELETE_LEAD:
            return {
                ...state,
                leads: state.leads.filter(lead => lead.id !== bindActionCreators.payload)
            }
        default:
            return state;
    }
}