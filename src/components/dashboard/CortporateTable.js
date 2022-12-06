import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";



export default function CortporateTable({ data }) {
  
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>სახელი, გვარი</TableCell>
            <TableCell align="right">ტელეფონი</TableCell>
            <TableCell align="right">მომსახურების ჯგუფი</TableCell>
            
            <TableCell align="right">ცვლილების თარიღი</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(({ id, fullName, phoneNumber, serviceTeam, changeDate }) => (
            <TableRow
              key={id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {fullName}
              </TableCell>
              
              <TableCell align="right">{phoneNumber}</TableCell>
              <TableCell align="right">{serviceTeam}</TableCell>
              <TableCell align="right">{changeDate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
