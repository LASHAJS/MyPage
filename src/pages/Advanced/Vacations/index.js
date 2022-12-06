import React from "react";
import { Box, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import CardContent from "@mui/material/CardContent";

const Vacations = () => {
  return (
    <Grid container spacing={2} rowSpacing={2} mt={5}>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Typography
              sx={{ fontSize: 20 }}
              color="text.secondary"
              gutterBottom
            >
              შვებულება
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Vacations;
