import React, { useState, useEffect } from 'react';
import { Box, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import DashboardComponent from "./DashboardComponent";
import Id from "./Id";
import CurrentAddress from "./CurrentAddress";
import LegalAddress from "./LegalAddress";
import Corporate from "./Corporate";
import CoporateNumber from "./CoporateNumber"
import { getPersonInfoAC } from '../../redux/dashboard/dashboardActions';
import { useDispatch, useSelector } from 'react-redux';
import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import ENGLISH from "../../language/en";
import GEORGIAN from "../../language/ge";
i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    fallbackLng: "en",
    resources: {
      en: { translation: ENGLISH },
      ge: { translation: GEORGIAN },
    },
    detection: {
      order: ["cookie", "htmlTag", "localStorage", "subdomain"],
      caches: ["cookie"],
    },
  });
function Dashbord() {
  const dispatch = useDispatch()
  const { basic,identity,actualAddress ,legalAddress,companyNumber,corporatePhones} = useSelector((state) => state.dashboardReducer);

  useEffect(() => {
    dispatch(getPersonInfoAC())
    return () => {
      //CLEANUP
    };
  }, []);

  
  const { t } = useTranslation();
  return (
    <Grid container spacing={2} rowSpacing={2} mt={5}>
      <Grid item xs={12}>
        <Card elevation={5}>
          <CardContent>
            <Typography
              sx={{ fontSize: 20 }}
              color="text.secondary"
              gutterBottom
            >
              ძირითადი
            </Typography>
            <DashboardComponent basic={basic} />
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={6} sm={12}>
        <Card elevation={5}>
          <CardContent>
            <Typography
              sx={{ fontSize: 20 }}
              color="text.secondary"
              gutterBottom
            >
              პირადობა
            </Typography>
            <Id identity={identity}/>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Card elevation={5}>
          <CardContent>
            <Typography
              sx={{ fontSize: 20 }}
              color="text.secondary"
              gutterBottom
            >
              აქტუალური მისამართი
            </Typography>
            <CurrentAddress actualAddress={actualAddress} />
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Card elevation={5}>
          <CardContent>
            <Typography
              sx={{ fontSize: 20 }}
              color="text.secondary"
              gutterBottom
            >
              იურიდიული მისამართი
            </Typography>
            <LegalAddress legalAddress={legalAddress} />
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={12}>
        <Card elevation={5}>
          <CardContent>
            <Typography
              sx={{ fontSize: 20 }}
              color="text.secondary"
              gutterBottom
            >
              კორპორატიული
            </Typography>
            <Corporate companyNumber={companyNumber} />
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={12}>
        <Card elevation={5}>
          <CardContent>
            <Typography
              sx={{ fontSize: 20 }}
              color="text.secondary"
              gutterBottom
            >
              კორპორატიული  ნომერი
            </Typography>
            <CoporateNumber corporatePhones={corporatePhones} />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Dashbord;
