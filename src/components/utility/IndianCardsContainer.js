import React from 'react';
import CountUp from 'react-countup'

import Card from './card';
const initialData={
    totalconfirmed:0,
    dailyconfirmed:0,
    totalrecovered:0,
    dailyrecovered:0,
    totaldeceased:0,
    dailydeceased:0
}

export default function CardsContainer(props){
    const{active,dailyData:data}=props;
    return(
        <>
            <h2 className="daily-data__activeLabel">
                   Total Active <CountUp start={0} duration={0.5} end={active} />
            </h2>
            <div className='Cards-Container'>
                <Card 
                    className='cardRootIndiaConfirmed' 
                    name="Total Confirmed" 
                    secondName='Today Confirmed' 
                    value={data?.totalconfirmed || 0} 
                    value2={data?.dailyconfirmed || 0}
                />
                <Card 
                    className='cardRootIndiaRecoverd' 
                    name="Total Recoverd" 
                    secondName='Today Recovered' 
                    value={data?.totalrecovered || 0} 
                    value2={data?.dailyrecovered || 0}
                />
                <Card 
                    className='cardRootIndiaMortality' 
                    name="Total Deceased" 
                    secondName='Today Deceased' 
                    value={data?.totaldeceased || 0} 
                    value2={data?.dailydeceased || 0}
                />
            </div>
        </>
    )
}