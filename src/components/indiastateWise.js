import React, { useEffect,useState } from 'react';
import{connect} from 'react-redux';

import StateTable from './utility/table'
import {stateWiseData} from '../reducer/indiastatewise/actions'

const IndiaStateWise=(props)=>{
    const [selectState, setselectState] = useState(["Andhra Pradesh", "ap"]);
    let stateWise=props.stateWise?.length>0?props.stateWise:[]
    let districtWiseData
    let stateDailyData
    let testedData
    useEffect(()=>{
        props.stateWiseData()
    },[])
   
        return(
            <div className="stateContainer">
            <StateTable
              stateWise={stateWise}
              setselectState={setselectState}
            />
            {/* <DistrictWise
              testedData={testedData}
              selectState={selectState}
              districtWiseData={districtWiseData}
              stateWiseData={stateWiseData.filter((data) => data.state !== "Total")}
              setselectState={setselectState}
              stateDailyData={stateDailyData}
            /> */}
          </div>
        )
}

const mapStateToprops=state=>{
    return{
        stateWise:state.stateWiseData.stateWiseData,
        // districtWiseData:state.stateWiseData.districtWiseData,
        // stateDailyData:state.stateWiseData.stateDailyData,
        // testedData:state.stateWiseData.testedData
    }
}

export default connect(mapStateToprops,{stateWiseData})(IndiaStateWise) 