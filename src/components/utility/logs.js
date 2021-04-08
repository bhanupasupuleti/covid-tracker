import React from "react";

import Card from '../utility/logsCard'

const Logs = ({ logData=[] }) => {
    return(
        <>
        <h2 className="logs-notificationLabel">
            Latest Notifications
        </h2>
        {logData.length > 0
            ? logData.map((data) => {
                return (
                    <Card key={data.timestamp} data={data} />);
            })
            : null}
        </>
    )
};

export default Logs;