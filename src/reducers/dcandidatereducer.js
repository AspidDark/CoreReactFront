import {ACTION_TYPES} from '../actions/dcandidate';
const initialState=
{
    list:[]
};

export const dcandidatereducer=(state=initialState, action)=>
{
    switch (action.type)
    {
        case ACTION_TYPES.FETCH_ALL:
            return{
                ...state,
                list:[...action.payload]
            }
        default:
            return state;
    }
}