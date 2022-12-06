import React, { useState, useEffect } from 'react';
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import { useDispatch, useSelector } from 'react-redux';
import { DataGrid } from '@mui/x-data-grid';
import moment from "moment";
import { getCurrent } from '../../../redux/seminars/currentSeminars/currentSeminarsActions';

const columns = [
  { field: "id", headerName: "ID", width: 90, hide: true },
  {
    field: "training",
    seminar: "სემინარები",
    minWidth: 350,
  },
  {
    field: "startDate",
    headerName: "დაწყების თარიღი",
    minWidth: 300,
    type: "date",
    renderCell: (params) => moment(params.row.date).format("DD/MM/YYYY"),
  },
  {
    field: "endDate",
    headerName: "დასრულების თარიღი",
    minWidth: 300,
    type: "date",
    renderCell: (params) => moment(params.row.date).format("DD/MM/YYYY"),
  },
  {
    field: "place",
    headerName: "ადგილი",
    minWidth: 150,
  },

];

export default function AttendedSeminars() {
  const data = useSelector((state) => state.currentSeminarReducer);
  const dispatch = useDispatch()

  useEffect(() => {
     dispatch(getCurrent())
  },[])
  console.log(data)
  return (
    <Grid container mt={8} p={2}>
      <Grid item xs={12} sm={12}>
      
       <div style={{ height: 800, width: '100%' }}>
       <Typography
              sx={{ fontSize: 20 }}
              color="text.secondary"
              gutterBottom
            >
              გავლილი სემინარები
            </Typography>
      <DataGrid
        rows={data.passedTrainings}
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
}