import {stateWiseData, STATE_WISE_DATA} from './actions'

const initialState={
    stateWise:[],
}

export default (state=initialState,action)=>{
    switch (action.type) {
        case STATE_WISE_DATA:
            const {stateWise}=action.payload
            console.log(stateWise)

            return {...state,stateWise}
        default:
            return state
    }
}