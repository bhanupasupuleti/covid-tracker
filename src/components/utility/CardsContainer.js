import React from 'react';

import Card from './card'

export default ({data=[]})=>{
    return(
        <div className='Cards-Container'>
            <Card className='cardRootConfirmed' name="Confirmed" />
            <Card className='cardRootRecoverd' name="Recoverd"/>
            <Card className='cardRootMortality' name="Mortality" />
        </div>
    )
}