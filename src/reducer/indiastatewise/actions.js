import {indiaUrl} from '../../baseurl/baseUrl';
export const STATE_WISE_DATA='STATE_WISE_DATA'

export const stateWiseData=()=>async dispatch=>{
    try {
        const [
          stateD,
          districtD,
          stateDailyD,
          {
            data: { states_tested_data },
          },
        ] = await Promise.all([
            indiaUrl.get("data.json"),
            indiaUrl.get("v2/state_district_wise.json"),
            indiaUrl.get("states_daily.json"),
            indiaUrl.get("state_test_data.json"),
        ]);
        // console.log(stateD,districtD,stateDailyD,states_tested_data)
        // const dailyStateConfirmedData = stateDailyD.data.states_daily.filter(
        //   (val) => val.status === "Confirmed"
        // );
        // const dailyStateRecoveredData = stateDailyD.data.states_daily.filter(
        //   (val) => val.status === "Recovered"
        // );
        // const dailyStateDeceasedData = stateDailyD.data.states_daily.filter(
        //   (val) => val.status === "Deceased"
        // );
        // settestedData(states_tested_data.reverse());
        dispatch({type:STATE_WISE_DATA,payload:{
            stateWise:stateD.data.statewise
        }})
        // setstateDailyData([
        //   dailyStateConfirmedData,
        //   dailyStateRecoveredData,
        //   dailyStateDeceasedData,
        // ]);
        // setdistrictWiseData(districtD.data);
      }
      catch (err) {
        console.log(err);
      }
}