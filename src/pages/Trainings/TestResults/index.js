import React, { useState, useEffect } from 'react';
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import { useDispatch, useSelector } from 'react-redux';
import { DataGrid } from '@mui/x-data-grid';
import moment from "moment";
import  {getTestResult} from "../../../redux/seminars/testResult/testResultAction"

const columns = [
  { field: "id", headerName: "ID", width: 90, hide: true },
  {
    field: "test",
    seminar: "სემინარები",
    minWidth: 400,
  },
  {
    field: "date",
    headerName: "თარიღი",
    minWidth: 300,
    type: "date",
    renderCell: (params) => moment(params.row.date).format("DD/MM/YYYY"),
  },
  {
    field: "testResult",
    headerName: "ადგილი",
    minWidth: 150,
  },

];

export default function TestResult() {
  const data = useSelector((state) => state.testResultReducer);
  const dispatch = useDispatch()

  useEffect(() => {
     dispatch(getTestResult())
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
              ტესტის შედეგები
            </Typography>
      <DataGrid
        rows={data.testResults}
        columns={columns}
        pageSize={15}
        rowsPerPageOptions={[15]}
        autoHeight
        disableSelectionOnClick
        className="MuiDataGrid-virtualScrollerContent--overflowed"
        loading={data.testResults.length === 0}

      />
    </div>
    </Grid>
    </Grid>
  );
}