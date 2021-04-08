import axios from "axios";

export const url=axios.create(
    {
        baseURL:'https://covid19.mathdro.id/api'
    }
)

export const indiaUrl=axios.create(
    {
       baseURL:"https://api.covid19india.org"
    }
)