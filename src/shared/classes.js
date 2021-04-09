import {makeStyles,withStyles} from '@material-ui/core';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

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
      titleState: {
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
      },
      table: {
        width:'95%',
        margin:'1rem'
      },
      cardRootStateConfirmed:{
        width: "65%",
        margin:'2rem',
        borderRadius:"10px",
        backgroundColor:"#587498",
      },
  }));

  export const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);

  export const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
      '&:hover':{
        backgroundColor:'#bcd6db',
        cursor:'pointer'
      }
    },
  }))(TableRow);
  export const StyledTableRowDistrict = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);