import {makeStyles} from '@material-ui/core';
export const useStyles = makeStyles((theme) => ({
    tabsIndicator:{
        style: {
            backgroundColor: "white"
        }
    },
    cardRootConfirmed: {
        width: "50%",
        margin:'20px',
        borderRadius:"10px",
        backgroundColor:"#587498",
      },
     cardRootRecoverd: {
        width: "50%",
        margin:'20px',
        borderRadius:"10px",
        backgroundColor:"#587058",
      },
      cardRootMortality: {
        width: "50%",
        margin:'20px',
        borderRadius:"10px",
        backgroundColor:"#E86850",
      },
      title: {
        fontSize: "1.4rem",
        color:'white',
        fontWeight:'400'
      },
      pos: {
        marginBottom: 12,
      },
       backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#bcd6db',
  },
  }));