import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

import {useStyles} from '../../shared/classes'

export default function Loader({showLoader}) {
  const classes = useStyles();
  return (
    <div>
      <Backdrop className={classes.backdrop} open={showLoader}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}
