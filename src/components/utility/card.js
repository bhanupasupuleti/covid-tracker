import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CountUp from 'react-countup';

import {useStyles} from '../../shared/classes'

export default function SimpleCard({className,name,secondName,value,lastUpdate='',value2}) {
  const classes = useStyles();
  return (
    <div className={classes[className]} >
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
         {name}
        </Typography>
        <Typography  className={classes.title}>
          <CountUp start={0} duration={1} separator="," end={value} />
        </Typography>
        <Typography  className={classes.title}>
          {secondName}
        </Typography>
        <Typography className={classes.title}>
         {lastUpdate?new Date(lastUpdate).toDateString():<CountUp start={0} duration={1} separator="," end={value2} />}
        </Typography>
      </CardContent>
    </div>
  );
}
