import {stateWiseData, STATE_WISE_DATA} from './actions'

const initialState={
    stateWise:[],
    stateDailyData:[],
    testedData:[],
    districtWiseData:[]
}

export default (state=initialState,action)=>{
    switch (action.type) {
        case STATE_WISE_DATA:
            console.log(action.payload.stateDailyData)
            const {stateWise,stateDailyData,testedData,districtWiseData}=action.payload
            return {...state,stateWise,stateDailyData,testedData,districtWiseData}
        default:
            return state
    }
}