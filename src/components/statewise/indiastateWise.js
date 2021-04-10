import React, { useEffect,useState } from 'react';
import{connect} from 'react-redux';
import LinearProgress from '@material-ui/core/LinearProgress';

import StateTable from '../utility/table';
import DistrictWise from './DistrictWise'
import {stateWiseData} from '../../reducer/indiastatewise/actions'

const IndiaStateWise=(props)=>{
    const [selectState, setselectState] = useState(["Andhra Pradesh", "ap"]);
    let stateWise=props.stateWise?.length>0?props.stateWise:[]
    let districtWiseData=props.districtWiseData?.length>0?props.districtWiseData:[]
    let stateDailyData=props.stateDailyData?.length>0?props.stateDailyData:[]
    let testedData=props.testedData?.length>0?props.testedData:[]
    useEffect(()=>{
        props.stateWiseData()
    },[]);
    if(stateWise.length===0 || districtWiseData.length===0|| stateDailyData.length===0|| testedData.length===0){ 
        return (
          <LinearProgress />
          )
   }
        return(
            <div className="stateContainer">
            <StateTable
              stateWise={stateWise}
              setselectState={setselectState}
            />
            <DistrictWise
              testedData={testedData}
              selectState={selectState}
              districtWiseData={districtWiseData}
              stateWise={stateWise.filter((data) => data.state !== "Total")}
              setselectState={setselectState}
              stateDailyData={stateDailyData}
            />
          </div>
        ) 
}

const mapStateToprops=state=>{
    return{
        stateWise:state.stateWiseData.stateWise,
        districtWiseData:state.stateWiseData.districtWiseData,
        stateDailyData:state.stateWiseData.stateDailyData,
        testedData:state.stateWiseData.testedData
    }
}

export default connect(mapStateToprops,{stateWiseData})(IndiaStateWise) 