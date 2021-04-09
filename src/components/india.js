import React,  { useState, useEffect }  from 'react';
import { connect } from 'react-redux';
import Loader from './utility/loader';

import Logs from './utility/logs';
import {getIndiaData} from '../reducer/india/actions';
import DailyData from './DailyData';
import IndiaDailyChart from './indiaDailyChart'

const India=(props)=>{
    useEffect(()=>{
        props.getIndiaData()
    },[])
    const data=props.dailyData.cases_time_series?props.dailyData.cases_time_series:[]
    return(
        <div className='India'>
            <Loader showLoader={props.showLoader} />
            <div className='indiaFlexContainer'>
                <div className='logs'>
                    <Logs logData={props.logs} />
                </div>
                <div className='daily-data-container'>
                    <DailyData dailyData={props.dailyData} />
                </div>
            </div>
            <div className='india__chart'>
             <IndiaDailyChart dailyData={data} />
            </div>
        </div>
    )
}
const mapStateToPros=state=>{
    return {
       logs:state.indiaData.logs,
       dailyData:state.indiaData.dailyData,
       showLoader:state.indiaData.isFetching,
    }
}
export default connect(mapStateToPros,{getIndiaData})(India)