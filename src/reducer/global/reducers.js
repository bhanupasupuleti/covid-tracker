import {GLOBAL_DATA,
        COUNTRIES_LIST,
        FETCHING,
        DAILY_DATA} from './actions';

const initialState={
    stats:{
        confirmed:0,
        recovered:0,
        deaths:0,
        lastUpdate:''
    },
    countries:[],
    globalDailyData:[],
    isFetching:true
}
export default (state=initialState,action)=>{
    switch (action.type) {
        case GLOBAL_DATA :
            const {confirmed,recovered,deaths,lastUpdate}=action.payload
            return {...state,stats:{confirmed,recovered,deaths,lastUpdate},isFetching:false}
        case COUNTRIES_LIST:
            return {...state,countries:action.payload};
        case DAILY_DATA:
            return {...state,globalDailyData:action.payload};
        case FETCHING:
            return {...state,isFetching:true};
        
        default:
            return state
    }

}