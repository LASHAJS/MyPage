import React from "react";
import { Grid } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import { Typography } from "@mui/material";

const insurance = () => {
  return (
    <Grid container mt={10}>
      <Grid item xs={12}>
 
      <Typography
              sx={{ fontSize: 20 }}
              color="text.secondary"
              gutterBottom
            >
              დაზღვევა
            </Typography>
      </Grid>
    </Grid>
  );
};

export default insurance;
