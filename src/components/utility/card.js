import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CountUp from 'react-countup';

import {useStyles} from '../../shared/classes'

export default function SimpleCard({className,name,value,lastUpdate=''}) {
  const classes = useStyles();
  return (
    // <Card className={classes.cardRoot}>
    <div className={classes[className]} >
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
         {`Total ${name}`}
        </Typography>
        <Typography  className={classes.title}>
          <CountUp start={0} duration={1} end={value} />
        </Typography>
        <Typography  className={classes.title}>
          Last Updated
        </Typography>
        <Typography className={classes.title}>
         {new Date(lastUpdate).toDateString()}
        </Typography>
      </CardContent>
    </div>
    // </Card>
  );
}
