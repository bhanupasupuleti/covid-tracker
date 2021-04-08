import {INDIA_DATA} from './actions';
const initialState={
    logs:[],
    dailyData:[]
}

export default (state=initialState,action)=>{
    switch (action.type) {
        case INDIA_DATA:
            return {...state,logs:action.payload.logs,dailyData:action.payload.dailyData}    
        default:
            return state
    }
}