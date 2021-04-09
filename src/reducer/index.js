import { combineReducers } from 'redux';
import globalData from './global/reducers';
import indiaData from './india/reducers';
import stateWiseData from './indiastatewise/reducers'

export default combineReducers({
  globalData,
  indiaData,
  stateWiseData
});