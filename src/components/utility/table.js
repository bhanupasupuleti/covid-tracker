import React from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import {useStyles,StyledTableCell,StyledTableRow} from '../../shared/classes'

const StateTable = (props) => {
  const {stateWise,setselectState}=props;
  const classes=useStyles()
  return (
    <div className='Table_container' >
      <h2 className='table-label'>State wise Data</h2>    
      <Table className={`${classes.table} state__Table-Container`} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>SNO</StyledTableCell>
            <StyledTableCell align="left">State / UT</StyledTableCell>
            <StyledTableCell align="center">Confirmed</StyledTableCell>
            <StyledTableCell align="center">Recovered</StyledTableCell>
            <StyledTableCell align="center">Active</StyledTableCell>
            <StyledTableCell align="center">Dead</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {stateWise.slice(0,stateWise.length-1).map((row,i) => (
            <StyledTableRow key={row.state} 
                onClick={() =>
                  {
                  // console.log(row.statecode)
                   return row.state === "Total"
                   ? null
                   : setselectState([row.state,row.statecode.toLowerCase()])
                   }}>
              <StyledTableCell component="th" scope="row">
                 {row.state === "Total" ? "" : i}
              </StyledTableCell>
              <StyledTableCell style={{maxWidth:'20rem'}} align="left">{row.state}</StyledTableCell>
              <StyledTableCell align="center">{row.confirmed}</StyledTableCell>
              <StyledTableCell align="center">{row.recovered}</StyledTableCell>
              <StyledTableCell align="center">{row.active}</StyledTableCell>
              <StyledTableCell align="center">{row.deaths}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
  
    </div>
  )

}

export default StateTable;