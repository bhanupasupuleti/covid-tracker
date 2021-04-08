import url from '../../baseurl/baseUrl';
export const GLOBAL_DATA='GLOBAL_DATA';
export const COUNTRIES_LIST='COUNTRIES_LIST';
export const DAILY_DATA='DAILY_DATA';
export const FETCHING='FETCHING';

export const globalData=(country)=>async (dispatch)=>{
    try{
        dispatch(Fetching())
        const {data:{recovered,deaths,confirmed,lastUpdate}}=!country ?await url.get():await url.get(`countries/${country}`)
        dispatch({type:GLOBAL_DATA,payload:{
            recovered:recovered.value,
            deaths:deaths.value,
            confirmed:confirmed.value,
            lastUpdate
        }})
    }
    catch(e){
        console.log(e.message)
    }
}

export const getCountries=()=>async (dispatch)=>{
    try{
        const {data:{countries}}=await url.get('countries')
        dispatch({
            type:COUNTRIES_LIST,
            payload:countries
        })
    }
    catch(e){
        console.log(e.message)
    }
}
export const fetchDailyData= ()=>async (dispatch) => {
    try {
      const { data:restData } = await url.get('daily');
      const data=restData.map((dailyData) => ({
        confirmed: dailyData.confirmed,
        deaths: dailyData.deaths,
        reportDate: dailyData.reportDate,
      }))
      dispatch({
          type:DAILY_DATA,
          payload:data
      })
    } catch (error) {
      console.log(error);
      return false;
    }
  }

const Fetching=()=>(dispatch)=>{
    dispatch({type:FETCHING})
}