import url from '../../baseurl/baseUrl';
export const GLOBAL_DATA='GLOBAL_DATA'

export const globalData=()=>async (dispatch)=>{
    try{
        const {data:{recovered,deaths,confirmed,lastUpdate}}=await url.get()
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