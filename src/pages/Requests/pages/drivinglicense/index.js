import React, { useState, useEffect } from 'react';
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import { useDispatch, useSelector } from 'react-redux';
import { DataGrid } from '@mui/x-data-grid';
import  {getCarDrivingLicense} from "../../../../redux/request/drivingLicense/drivingReducer"

const columns = [
  { field: "id", headerName: "ID", width: 90, hide: true },
  {
    field: "date",
    headerName: "თარიღი",
    minWidth: 200,
    type: "date",
    
  },
  {
    field: "docN",
    headerName: "საბუთის ნომერი",
    minWidth: 250,
  },
  {
    field: "DateOfIssuance",
    headerName: "თარიღი",
    minWidth: 200,
    type: "date",
    
  },
  {
    field: "status",
    headerName: "სტატუსი",
    minWidth: 350,
  },


];

const DrivingLicense = () => {
  const data = useSelector((state) => state.carDrivingLicrnseReducer);
  const dispatch = useDispatch()

  useEffect(() => {
     dispatch(getCarDrivingLicense())
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
            ბანკის ავტომობილის მართვის უფლება 


            </Typography>
      <DataGrid
        rows={data.carDrivingLicense}
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

export default DrivingLicense;
