import React from 'react';

import Card from './card'

export default function CardsContainer({stats:data=[]}){
    return(
        <div className='Cards-Container'>
            <Card className='cardRootIndiaConfirmed' name="Total Confirmed" secondName='Today Confirmed' value={data.confirmed} value2={1000}/>
            <Card className='cardRootIndiaRecoverd' name="Total Recoverd" secondName='Today Recovered' value={data.recovered} value2={1000}/>
            <Card className='cardRootIndiaMortality' name="Total Deceased" secondName='Today Deceased' value={data.deaths} value2={1000}/>
        </div>
    )
}