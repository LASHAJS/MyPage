import React, { useState, useEffect } from 'react';
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import { useDispatch, useSelector } from 'react-redux';
import { DataGrid } from '@mui/x-data-grid';
import  {getCurrentRequirements} from "../../../../redux/request/vacation/vacationReducer"

const columns = [
  { field: "id", headerName: "ID", width: 90, hide: true },
  { headerName: "სემინარები",
    field: "reqType",
    seminar: "სემინარები",
    minWidth: 300,
  },
  {
    field: "date",
    headerName: "თარიღი",
    minWidth: 200,
    type: "date",
    
  },
  {
    field: "startDate",
    headerName: "დაწყების თარიღი",
    minWidth: 200,
    type: "date",
  
  },
  {
    field: "endDate",
    headerName: "დასრულების თარიღი",
    minWidth: 250,
    type: "date",
   
  },
  {
    field: "status",
    headerName: "სტატუსი",
    minWidth: 250,
  },
  {
    field: "details",
    headerName: "დეტალურად",
    minWidth: 350,
  },

];

const Vacation = () => {
  const data = useSelector((state) => state.leaveCurrentReqReducer);
  const dispatch = useDispatch()

  useEffect(() => {
     dispatch(getCurrentRequirements())
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
              ტესტის შედეგები
            </Typography>
      <DataGrid
        rows={data.leaveCurrentRequirements}
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

export default Vacation;
