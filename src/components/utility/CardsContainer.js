import React from 'react';

import Card from './card'

export default function CardsContainer({stats:data=[]}){
    return(
        <div className='Cards-Container'>
            <Card className='cardRootConfirmed' name="Confirmed" value={data.confirmed} lastUpdate={data.lastUpdate}/>
            <Card className='cardRootRecoverd' name="Recoverd" value={data.recovered} lastUpdate={data.lastUpdate}/>
            <Card className='cardRootMortality' name="Mortality" value={data.deaths} lastUpdate={data.lastUpdate}/>
        </div>
    )
}