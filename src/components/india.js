import React,  { useState, useEffect }  from 'react';
import { connect } from 'react-redux';

import Logs from './utility/logs';
import {getIndiaData} from '../reducer/india/actions';
import DailyData from './DailyData'

const India=(props)=>{
    useEffect(()=>{
        props.getIndiaData()
    },[])
    return(
        <div className='India'>
            <div className='indiaFlexContainer'>
                <div className='logs'>
                    <Logs logData={props.logs} />
                </div>
                <div className='indiaFlexContainer-right'>
                    <DailyData dailyData={props.dailyData} />
                </div>
            </div>
            <div className='india__chart'>
                chart here
            </div>
        </div>
    )
}
const mapStateToPros=state=>{
    return {
       logs:state.indiaData.logs,
       dailyData:state.indiaData.dailyData
    }
}
export default connect(mapStateToPros,{getIndiaData})(India)