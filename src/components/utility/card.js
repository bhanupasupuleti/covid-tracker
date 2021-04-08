import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

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
        <Typography>
          {value}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Last Updated
        </Typography>
        <Typography variant="body2" component="p">
         {lastUpdate}
        </Typography>
      </CardContent>
    </div>
    // </Card>
  );
}
