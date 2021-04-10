import React from "react";
// import StateDailyData from "./stategraph";
import CountUp from "react-countup";
import { format, parse } from "date-fns";
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import StateDailyData from "../utility/stateDailyData";
import {useStyles,StyledTableCell,StyledTableRowDistrict as StyledTableRow} from '../../shared/classes'

const DistrictTable = (props) => {
  const {data}=props;
  const classes=useStyles()
  return (
    <div className="Dist__Table-Container">  
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>SNO</StyledTableCell>
            <StyledTableCell align="left">District</StyledTableCell>
            <StyledTableCell align="center">Confirmed</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.districtData.map((row,i) => (
            <StyledTableRow key={row.district}>
              <StyledTableCell component="th" scope="row">
                 {i+1}
              </StyledTableCell>
              <StyledTableCell style={{maxWidth:'20rem'}} align="left">{row.district}</StyledTableCell>
              <StyledTableCell align="center">{row.confirmed}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
  
    </div>
  )

}

const SimpleCard=({value,value2,time}) =>{
  const classes = useStyles();
  return (
    <div className={classes.cardRootStateConfirmed} >
      <CardContent style={{textAlign:'left',paddingLeft:'20px'}}>
        <Typography  style={{textAlign:'center'}} className={classes.titleState} color="textSecondary" gutterBottom>
         Testing Stats
        </Typography>
        <Typography  className={classes.title}>
          Tested: <CountUp start={0} duration={1} separator="," end={value} />
        </Typography>
        <Typography  className={classes.title}>
          Negative + Unconfirmed : <CountUp start={0} duration={1} separator="," end={value2} />
        </Typography>
        <Typography className={classes.title}>
        {`As of ${format(
            parse(time, "dd/MM/yyyy", new Date()),
            "dd MMM"
          )}`}
        </Typography>
      </CardContent>
    </div>
  );
}

const DistrictWise = ({
  testedData,
  selectState,
  districtWiseData,
  stateWise,
  setselectState,
  stateDailyData,
}) => {
    const stateWiseDistrictData = districtWiseData.find(
        (stateData) => stateData.state === selectState[0]
      );
      const totalTested = testedData.find(
        (state) => state.state === selectState[0] && state.totaltested !== ""
      );
     let value= +totalTested.totaltested;
    let value2=+totalTested.negative + +totalTested.unconfirmed
    return(
        <div className='districtCont'>
            <h2 style={{color:'#636262'}}>Stats for {selectState[0]}</h2>
            <select
                className="select"
                onChange={(e) => {
                return setselectState([
                    e.target.value,
                    e.target.options[e.target.selectedIndex].id,
                ]);
                }}
                value={selectState[0]}
            >
                {stateWise.map((state) => {
                return (
                    <option
                    value={state.state}
                    key={state.state}
                    id={state.statecode.toLowerCase()}
                    >
                    {state.state}
                    </option>
                );
                })}
            </select>
                <SimpleCard value={value} value2={value2} time={totalTested?.updatedon}/>
            <StateDailyData className='stategraph'
                stateDailyData={stateDailyData}
                selectState={selectState}
            />
         {!stateWiseDistrictData ? (
        <h2 className="heading--secondary textCenter">{`No Cases Found in ${selectState[0]} State`}</h2>
      ) : (
          <DistrictTable data={stateWiseDistrictData} /> 
      )} 
        </div>
    )
};

export default DistrictWise;