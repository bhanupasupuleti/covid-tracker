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
        backgroundColor:"#587058",
      },
     cardRootRecoverd: {
        width: "50%",
        margin:'20px',
        borderRadius:"10px",
        backgroundColor:"#E86850",
      },
      cardRootMortality: {
        width: "50%",
        margin:'20px',
        borderRadius:"10px",
        backgroundColor:"#587498",
      },
      bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
      },
      title: {
        fontSize: "1.7rem",
        color:'white',
        fontWeight:'500'
      },
      pos: {
        marginBottom: 12,
      },
  }));