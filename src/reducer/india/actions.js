import {indiaUrl} from '../../baseurl/baseUrl'
export const INDIA_DATA="INDIA_DATA";
export const FETCHING='FETCHING';

export const getIndiaData=()=>async dispatch=>{
    try{
        dispatch(Fetching())
        const [logsData, getDailyData] = await Promise.all([
            indiaUrl.get("/updatelog/log.json"),
            indiaUrl.get("/data.json"),            
          ]);    
          const logs=logsData.data.reverse().slice(0,5);
          dispatch({
              type:INDIA_DATA,
              payload:{
                logs,
                dailyData:getDailyData.data
              }
          })

    }
    catch(error){
        console.log(error.message)
    }
}
const Fetching=()=>(dispatch)=>{
    dispatch({type:FETCHING})
}