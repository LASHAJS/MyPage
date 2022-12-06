import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CortporateTable from "./CortporateTable";
import { t } from "i18next";
import {  useSelector } from 'react-redux';
export default function Corporate(props) {
    const { companyNumber } = props;
    const {
      changeDate,
      limit,
      number,
      serviceGroup,
  
    } = companyNumber;
    const corporateNumberOfRelatives  = useSelector(({ dashboardReducer }) => dashboardReducer.companyNumber.corporateNumberOfRelatives);



    
  return (
    <Box
      direction="row"
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
        თანამშრომლის კორპორატიული ნომერი
      </Typography>
      <TextField
        label={t("phone")}
        name="number"
        value={number}
        multiline
        rows={1}
      
      />

      <TextField
         label={t("serviceGroup")}
         name="serviceGroup"
         value={serviceGroup}
        multiline
        rows={1}
        
      />
      <TextField
         label={t("limit")}
         name="limit"
         value={limit}
        multiline
        rows={1}
        
      />
      <TextField
         label={t("date")}
         name="changeDate"
         value={changeDate}
        multiline
        rows={1}
        
      />
      <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
        ნათესავების კორპორატიული ნომერი
      </Typography>
      <CortporateTable  data={corporateNumberOfRelatives}/>
    </Box>
  );
}
