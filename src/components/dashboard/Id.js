import React from "react";
import { Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { t } from "i18next";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import Stack from "@mui/material/Stack";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Avatar from "@mui/material/Avatar";
import moment from "moment";

export default function DashboardComponent(props) {
  const { identity } = props;
  const {
    documentN, 
    documentType,
     issuingAgency, 
     releaseDater, 
     validFor
  } = identity;
  const [age, setAge] = React.useState("");
  const releaseDate = moment(releaseDater, "DD/MM/YYYY").format(
    "YYYY-MM-DDThh:mm:ss"
  ); 
  const validUntil = moment(validFor, "DD/MM/YYYY").format(
    "YYYY-MM-DDThh:mm:ss"
  );
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const [value, setValue] = React.useState("");

  const handleChangeD = (newValue) => {
    setValue(newValue);

  };
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
        <InputLabel >{t("IDCard")}</InputLabel>
        <Select
           label={t("docType")}
           name="documentType"
           value={documentType}
          onChange={handleChange}
        >
          <MenuItem value={documentType}>{documentType}</MenuItem>
          <MenuItem value={documentType}>{documentType}</MenuItem>
          <MenuItem value={documentType}>{documentType}</MenuItem>
        </Select>
      </FormControl>

      <TextField
        label={t("documentNumber")}
        name="documentN"
        value={documentN}
        multiline
        rows={1}
      />

      <TextField
        label={t("issuingAgency")}
        name="issuingAgency"
        value={issuingAgency}
        multiline
        rows={1}
      />

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Stack spacing={3} sx={{ m: 1, width: "40ch" }}>
          <DesktopDatePicker
          label={t("releaseDate")}
          name="releaseDater"
          value={releaseDate}
          renderInput={(params) => <TextField {...params} />}
          />
        </Stack>
      </LocalizationProvider>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Stack spacing={3} sx={{ m: 1, width: "40ch" }}>
          <DesktopDatePicker
           label={t("validTo")}
           name="validFor"
           value={validUntil}
          renderInput={(params) => <TextField {...params} />}
          />
        </Stack>
      </LocalizationProvider>
    </Box>
  );
}
