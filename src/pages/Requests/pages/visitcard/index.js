import React, { useState, useEffect } from 'react';
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import { useDispatch, useSelector } from 'react-redux';
import { DataGrid } from '@mui/x-data-grid';
import  {getCorpNumber} from "../../../../redux/request/corpNumber/corpReducer"

const columns = [
  { field: "id", headerName: "ID", width: 90, hide: true },
  {
    field: "date",
    headerName: "თარიღი",
    minWidth: 200,
    type: "date",
    
  },
  {
    field: "reqType",
    headerName: "მოთხოვნის ტიპი",
    minWidth: 250,
  },
  {
    field: "status",
    headerName: "სტატუსი",
    minWidth: 350,
  },

];

const VisitCard = () => {
  const data = useSelector((state) => state.corpNumberReducer);
  const dispatch = useDispatch()

  useEffect(() => {
     dispatch(getCorpNumber())
  },[])
  console.log(data)
  return (
    <Grid container mt={1} p={2}>
      <Grid item xs={12} sm={12}>
      
       <div style={{ height: 800, width: '100%' }}>
       <Typography
              sx={{ fontSize: 20 }}
              color="text.secondary"
              gutterBottom
            >
             სავიზიტო ბარათი : მიმდინარე მოთხოვნები

            </Typography>
      <DataGrid
        rows={data.corpNumber}
        columns={columns}
        pageSize={15}
        rowsPerPageOptions={[15]}
        autoHeight
        disableSelectionOnClick
        className="MuiDataGrid-virtualScrollerContent--overflowed"

      />
    </div>
    </Grid>
    </Grid>
  );
};

export default VisitCard;
