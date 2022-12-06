import React from "react";

import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { t } from "i18next";
export default function LegalAddress(props) {
  const { legalAddress } = props;
  const {
    city,
    address,
  } = legalAddress;

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
      <FormControl sx={{ m: 1, width: "25ch" }}>
        <InputLabel id="demo-simple-select-label">{t("city")}</InputLabel>
        <Select
           label={t("city")}
           name="city"
           value={city}
          
        >
     <MenuItem value={city}>{city}</MenuItem>
        </Select>
      </FormControl>
      <TextField
      sx={{ m: 1, width: "50ch" }}
         label={t("address")}
         name="address"
         value={address}
        multiline
        rows={1}
      />
    </Box>
  );
}
