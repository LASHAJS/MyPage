import React, { useState, useEffect } from 'react';
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import { useDispatch, useSelector } from 'react-redux';
import { DataGrid } from '@mui/x-data-grid';
import moment from "moment";
import  {getBusinessTrip} from "../../../../redux/request/trip/tripReducer"
import Details from "./details"

const columns = [
  { field: "id", headerName: "ID", width: 90, hide: true ,editable: false,},
  {
    field: "date",
    headerName: "თარიღი",
    minWidth: 200,
    type: "date",
    editable: false,
  
  },
  { headerName: "მივლინების მიზანი",
    field: "tripGoal",
    minWidth: 380,
    editable: false,
  },
  {
    field: "startDate",
    headerName: "დაწყების თარიღი",
    minWidth: 200,
    type: "date",
    editable: false,

  
  },
  {
    field: "endDate",
    headerName: "დასრულების თარიღი",
    minWidth: 250,
    type: "date",
    editable: false,
  },
  {
    field: "status",
    headerName: "სტატუსი",
    minWidth: 250,
    editable: false,
  },
  {
    field: "details",
    headerName: "დეტალურად",
    minWidth: 200,
    editable: false,
    renderCell: (params) => <Details data={ params.row } />,
  },

];

const Trip = () => {
  const data = useSelector((state) => state.businessTripReducer);
  const dispatch = useDispatch()

  useEffect(() => {
     dispatch(getBusinessTrip())
  },[])
  return (
    <Grid container mt={1} p={2}>
      <Grid item xs={12} sm={12}>
      
       <div style={{ height: 800, width: '100%' }}>
       <Typography
              sx={{ fontSize: 20 }}
              color="text.secondary"
              gutterBottom
            >
             მივლინება : მიმდინარე მოთხოვნები 
            </Typography>
      <DataGrid
        rows={data.businessTrip}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        autoHeight
        disableSelectionOnClick
        className="MuiDataGrid-virtualScrollerContent--overflowed"

      />
    </div>
    </Grid>
    </Grid>
  );
};

export default Trip;
