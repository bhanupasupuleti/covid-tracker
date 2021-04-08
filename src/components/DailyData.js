import React from 'react';

import CardsContainer from './utility/IndianCardsContainer'

export default ({dailyData})=>{
    console.log(dailyData)
    return(
        <>
            <h2 className="logs-notificationLabel">
                Latest Notifications
             </h2>
            <CardsContainer name='Total Confirmed' secondName='Today Confirmed' value/>
        </>
    )
}