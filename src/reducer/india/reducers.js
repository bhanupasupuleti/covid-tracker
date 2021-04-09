import {INDIA_DATA,
        FETCHING} from './actions';
const initialState={
    logs:[],
    dailyData:{},
    isFetching:true
}

export default (state=initialState,action)=>{
    switch (action.type) {
        case INDIA_DATA:
            return {...state,logs:action.payload.logs,dailyData:action.payload.dailyData,isFetching:false}  
        case FETCHING:
           return {...state,isFetching:true};  
        default:
            return state
    }
} 