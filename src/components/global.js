import React,  { useState, useEffect }  from 'react';
import { connect } from 'react-redux';

import CardsContainer from '../components/utility/CardsContainer';
import CountrySelect from './CountrySelect';
import Loader from './utility/loader';
import GlobalCharts from './globalCharts'
import {globalData,getCountries,fetchDailyData} from '../reducer/global/actions'

const Global=(props)=>{
    const[country,setCountry]=useState('');
    let stats=props.stats;
    let countries=props.countries;
    let globalDailyData=props.globalDailyData;
    useEffect(()=>{
        props.globalData(country);
    },[country]);
    useEffect(()=>{
        props.fetchDailyData()
        props.getCountries()
    },[])
    return(
        <div className="Global">
            <Loader showLoader={props.showLoader} />
            <CardsContainer stats={stats}/>
            <CountrySelect value={country} options={countries} setCountry={setCountry} />
            <GlobalCharts stats={stats} country={country} lineChartData={globalDailyData}/>
        </div>
    )
}
const mapStateToPros=state=>{
    return {
        stats:state.globalData.stats,
        countries:state.globalData.countries,
        showLoader:state.globalData.isFetching,
        globalDailyData:state.globalData.globalDailyData,
    }
}

export default connect(mapStateToPros,{globalData,getCountries,fetchDailyData})(Global)