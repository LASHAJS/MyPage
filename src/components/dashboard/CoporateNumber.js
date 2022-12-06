import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {  useSelector } from 'react-redux';

export default function CoporateNumber() {
    const data = useSelector(({ dashboardReducer }) => dashboardReducer.corporatePhones);
  return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>სახელი</TableCell>
          <TableCell align="right">გვარი</TableCell>
          <TableCell align="right">ურთიერთობა</TableCell>
          
          <TableCell align="right">TaxCode</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map(({ id, Firstname, Lastname, Relation, TaxCode }) => (
          <TableRow
            key={id}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {Firstname}
            </TableCell>
            
            <TableCell align="right">{Lastname}</TableCell>
            <TableCell align="right">{Relation}</TableCell>
            <TableCell align="right">{TaxCode}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}



