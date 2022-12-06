import React from 'react'
import { Grid} from '@mui/material';
import TextField from '@mui/material/TextField';
import Box from "@mui/material/Box";
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Stack from '@mui/material/Stack';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Avatar from '@mui/material/Avatar';
import { t } from "i18next";



export default function CurrentAddress(props) {
  const { actualAddress } = props;
  const {
    city,
    address,
  } = actualAddress;

 
    return (
        <Box direction="row"
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1 }
        }}
        noValidate
        autoComplete="off"
      >

<FormControl  sx={{ m: 1 , width: '25ch'} }>
  <InputLabel id="demo-simple-select-label">{t("city")}</InputLabel>
  <Select
   label={t("city")}
   name="city"
   value={city}
  >
    <MenuItem value={city}>{city}</MenuItem>
    <MenuItem value={city}>{city}</MenuItem>
    <MenuItem value={city}>{city}</MenuItem>
  </Select>
</FormControl>
    <TextField
    sx={{ m: 1 , width: '40ch'} }
          label={t("address")}
          name="address"
          value={address}
          multiline
          rows={1}
        />


            </Box>

    )
}

