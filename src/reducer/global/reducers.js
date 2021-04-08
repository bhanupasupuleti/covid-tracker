import {GLOBAL_DATA} from './actions';

const initialState={
    stats:{
        confirmed:0,
        recovered:0,
        deaths:0,
        lastUpdate:''
    }
}
export default (state=initialState,action)=>{
    switch (action.type) {
        case GLOBAL_DATA :
            const {confirmed,recovered,deaths,lastUpdate}=action.payload
            return {...state,stats:{confirmed,recovered,deaths,lastUpdate}}
        default:
            return state
    }

}