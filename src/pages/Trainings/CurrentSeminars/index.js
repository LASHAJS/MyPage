import React, { useState, useEffect } from 'react';
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import {getAttended} from "../../../redux/seminars/attendedSeminars/attendedSeminarsActions"
import { useDispatch, useSelector } from 'react-redux';
import { DataGrid } from '@mui/x-data-grid';
import moment from "moment";
import Schedule from "./schedule"



const columns = [
  { field: "id", headerName: "ID", width: 90, editable: false, hide: true },
  {
    field: "seminar",
    seminar: "სემინარები",
    minWidth: 350,
  },
  {
    field: "test",
    headerName: "ტესტი",
    minWidth: 400,

  },
  {
    field: "date",
    headerName: "თარიღი",
    minWidth: 200,
    type: "date",
    renderCell: (params) => moment(params.row.date).format("DD/MM/YYYY"),
  },
  {
    field: "schedule",
    headerName: "განრიგი",
    minWidth: 200,
    type: "actions",
    renderCell: (params) => <Schedule data={ params.row } />,
  },
  {
    field: "registration",
    headerName: "რეგისტრაცია",
    minWidth: 200,
    type: "boolean",
    editable: false,

  },
  {
    field: "registered",
    headerName: "დარეგისტრირებული",
    minWidth: 250,
    type: "boolean",
    editable: false,
  },
];

export default function CurrentSeminars() {
  const data = useSelector((state) => state.attendedSeminarReducer);
  const dispatch = useDispatch()

  useEffect(() => {
     dispatch(getAttended())
  },[])

  return (
    <Grid container mt={8} p={2}>
      <Grid item xs={12} sm={12}>
      
       <div style={{ height: 800, width: '100%' }}>
       <Typography
              sx={{ fontSize: 20 }}
              color="text.secondary"
              gutterBottom
            >
              მიმდინარე სემინარები
            </Typography>
      <DataGrid
        rows={data.trainings}
        columns={columns}
        pageSize={15}
        rowsPerPageOptions={[2]}
        autoHeight
        disableSelectionOnClick
        className="MuiDataGrid-virtualScrollerContent--overflowed"


      />
    </div>
    </Grid>
    </Grid>
  );
}