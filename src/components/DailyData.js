import React, { useEffect } from 'react';

import CardsContainer from './utility/IndianCardsContainer';
import IndiaMonthlyChart from './IndiaMonthlyChart'

export default (props)=>{
    let dailyData=props.dailyData
    const active=dailyData.statewise?dailyData.statewise.reduce((acc,state)=>{
        acc+=parseInt(state.active)
        return acc
    },0):0;
    const data=dailyData.cases_time_series?dailyData.cases_time_series[dailyData.cases_time_series.length-1]:null;
    const monthlyData=dailyData.cases_time_series?dailyData.cases_time_series:[]
    // console.log(monthlyData)
        return(
            <>
                 <CardsContainer active={active} dailyData={data}  />
                 <IndiaMonthlyChart dailyData={monthlyData} />
            </>
        )
    }
