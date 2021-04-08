import React from 'react';

import Card from './card'

export default function CardsContainer({stats:data=[]}){
    return(
        <div className='Cards-Container'>
            <Card className='cardRootConfirmed' name="Total Confirmed" secondName='Last Updated' value={data.confirmed} lastUpdate={data.lastUpdate}/>
            <Card className='cardRootRecoverd' name="Total Recoverd" secondName='Last Updated' value={data.recovered} lastUpdate={data.lastUpdate}/>
            <Card className='cardRootMortality' name="Toatl Mortality" secondName='Last Updated' value={data.deaths} lastUpdate={data.lastUpdate}/>
        </div>
    )
}