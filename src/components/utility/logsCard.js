import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography';
import { formatDistance } from "date-fns";

import {useStyles} from '../../shared/classes'

export default function SimpleCard({data:{timestamp,update}}) {
  const classes = useStyles();
  return (
    <div className={classes.logsCard} >
      <Card>
        <CardContent>
          <Typography className={classes.logHeader} color="textSecondary" gutterBottom>
          {"About " +
                      formatDistance(
                        new Date(timestamp * 1000),
                        new Date()
                      ) +
                      " Ago"}
          </Typography>
          {update.split("\n").map((val, i) => (
              <Typography className={classes.logData} key={i}>
                  {val}
              </Typography>
                  ))}
        </CardContent>
      </Card>
    </div>
    // </Card>
  );
}
