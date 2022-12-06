import React, { useState, useEffect } from 'react';
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import { useDispatch, useSelector } from 'react-redux';
import { DataGrid } from '@mui/x-data-grid';
import {getPersonInfoAC} from "../../../../redux/dashboard/dashboardActions"

const columns = [
  { field: "id", headerName: "ID", width: 90, hide: true },
  {
    field: "fullName",
    headerName: "თარიღი",
    minWidth: 200,
    type: "date",
    
  },
  {
    field: "branch",
    headerName: "მოთხოვნის ტიპი",
    minWidth: 250,
  },
  {
    field: "Position",
    headerName: "სტატუსი",
    minWidth: 350,
  },

];

const VisitCard = () => {
  const data = useSelector((state) => state.dashboardReducer.basic);
  const dispatch = useDispatch()
  const [basicArr,setBasicArr] = useState([])

  useEffect(() => {
     if(data){
        const arr = []
       
        arr.push({id:data.branch,fullName: data.fullName,branch:data.branch,Position:data.Position})
        setBasicArr(arr)
     }
  },[data])


  useEffect(() => {
     dispatch(getPersonInfoAC())
     
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
             შუალედური შეფასება

            </Typography>
      <DataGrid
        rows={basicArr}
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
