import { combineReducers } from 'redux';
import globalData from './global/reducers';
import indiaData from './india/reducers'

export default combineReducers({
  globalData,
  indiaData
});