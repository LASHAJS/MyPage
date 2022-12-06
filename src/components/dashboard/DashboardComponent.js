import React, { useState, useEffect } from 'react';
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import moment from "moment";
import Select from "@mui/material/Select";
import AssignmentIcon from "@mui/icons-material/Assignment";
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import { t } from "i18next";

export default function DashboardComponent(props) {
  const { basic } = props;
  const {
    OjCondition,
    PersonalN,
    Position,
    branch,
    corpMail,
    dateOfBirth,
    fullName,
    homes,
    insideN,
    mobile,
    placeOfBirth,
    status,
    personalMail,
    places,
    Citizenship,
  } = basic;


  const born = moment(dateOfBirth, "DD/MM/YYYY").format("YYYY-MM-DDThh:mm:ss");
  return (
    <Box component="form" sx={{ "& .MuiTextField-root": { m: 1 } }}>
      <Stack sx={{ m: 1 }} >
        <Avatar variant="rounded" sx={{ height: '370px', width: '270px' }} elevation={3}>
          <AccountBoxOutlinedIcon sx={{ height: '370px', width: '270px' }} />
        </Avatar>
      </Stack>

      <TextField
        label={t("fullName")}
        name="fullName"
        value={fullName}
        multiline
        rows={1}
       
      />

      <TextField
        label={t("status")}
        name="status"
        value={status}
        multiline
        rows={1}
        sx={{ m: 1, width: "40ch" }}
      />

      <TextField
        label={t("office")}
        multiline
        rows={1}
        name="branch"
        value={branch}
      />

      <TextField
       label={t("position")}
       name="Position"
       value={Position}
        multiline
        rows={1}
        fullWidth
        sx={{ m: 1, width: "40ch" }}
      />

      <FormControl sx={{ m: 1, width: "25ch" }}>
        <InputLabel >{t("birthPlace")}</InputLabel>
        <Select
          label={t("birthPlace")}
          name="placeOfBirth"
          value={placeOfBirth}
          options={places}
          
        >
          <MenuItem value={placeOfBirth}>{placeOfBirth}</MenuItem>
          <MenuItem value={placeOfBirth}>{placeOfBirth}</MenuItem>
          <MenuItem value={placeOfBirth}>{placeOfBirth}</MenuItem>
        </Select>
      </FormControl>
      
      
      <FormControl sx={{ m: 0, width: "25ch" }}>
      <LocalizationProvider dateAdapter={AdapterDayjs} >
        <Stack spacing={3} >
          <DesktopDatePicker
            label={t("dateOfBirth")}
            inputFormat="MM/DD/YYYY"
            name="dateOfBirth"
            value={born}
            
            renderInput={(params) => <TextField {...params} />}
          />
        </Stack>
      </LocalizationProvider>
      </FormControl>
      <FormControl sx={{ m: 1, width: "25ch" }}>
        <InputLabel>{t("Citizenship")}</InputLabel>
        <Select
          label={t("Citizenship")}
          name="Citizenship"
          value={Citizenship}
          
        >
          <MenuItem value={Citizenship}>{Citizenship}</MenuItem>
          <MenuItem value={Citizenship}>{Citizenship}</MenuItem>
          <MenuItem value={Citizenship}>{Citizenship}</MenuItem>
        </Select>
      </FormControl>

      <TextField
         label={t("maritalStatus")}
         name="OjCondition"
         value={OjCondition}
        multiline
        rows={1}
      />

      <TextField
       label={t("personalN")}
       name="PersonalN"
       value={PersonalN}
        multiline
        rows={1}

      />
      <TextField
         label={t("homePhone")}
         name="homes"
         value={homes}
        multiline
        rows={1}

      />

      <TextField
        label={t("mobilePhone")}
        name="mobile"
        value={mobile}
        multiline
        rows={1}

      />

      <TextField
        label={t("insideN")}
        name="insideN"
        value={insideN}
        multiline
        rows={1}
      />
       <TextField
        label={t("personalMail")}
        name="personalMail"
        value={personalMail}
        multiline
        rows={1}
        sx={{ m: 1, width: "40ch" }}
        
      />
      <TextField
        label={t("companyMail")}
        name="corpMail"
        value={corpMail}
        multiline
        rows={1}
        sx={{ m: 1, width: "40ch" }}
      />
    </Box>
  );
}
