import React from 'react';

import Card from './card'

export default ({data=[]})=>{
    return(
        <div style={{display:'flex',textAlign:'center'}}>
            <Card className='cardRootConfirmed' name="Confirmed" />
            <Card className='cardRootRecoverd' name="Recoverd"/>
            <Card className='cardRootMortality' name="Mortality" />
        </div>
    )
}