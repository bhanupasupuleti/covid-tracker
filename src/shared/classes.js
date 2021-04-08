import {makeStyles} from '@material-ui/core';
export const useStyles = makeStyles((theme) => ({
    tabsIndicator:{
        style: {
            backgroundColor: "white"
        }
    },
    cardRootConfirmed: {
        width: "50%",
        margin:'2rem',
        borderRadius:"10px",
        backgroundColor:"#587498",
      },
     cardRootRecoverd: {
        width: "50%",
        margin:'2rem',
        borderRadius:"10px",
        backgroundColor:"#587058",
      },
      cardRootMortality: {
        width: "50%",
        margin:'2rem',
        borderRadius:"10px",
        backgroundColor:"#E86850",
      },
      title: {
        fontSize: "1.4rem",
        color:'white',
        fontWeight:'400'
      },
      backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#bcd6db',
      },
      logsCard:{
        width: "100%",
        margin:'1rem',
        borderRadius:"10px",
        backgroundColor:"#587498",
      },
      logHeader:{
        fontSize:'1.3rem',
        color:'black',
      },
      logData:{
        fontSize:'0.9rem',
        color:'grey'
      },
      cardRootIndiaConfirmed:{
        width: "50%",
        margin:'2rem',
        borderRadius:"10px",
        backgroundColor:"#587498",
      },
      cardRootIndiaRecoverd:{
        width: "50%",
        margin:'2rem',
        borderRadius:"10px",
        backgroundColor:"#587058",
      },
      cardRootIndiaMortality:{
        width: "50%",
        margin:'2rem',
        borderRadius:"10px",
        backgroundColor:"#E86850",
      }
  }));