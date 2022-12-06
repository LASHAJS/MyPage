import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import IPC from './IPC/index'
import CorpNumber from './corpnumber/index'
import DrivingLicense from './drivinglicense/index'
import Intassessment from './intassessment/index'
import Trip from './trip/index'
import Vacation from './vacation/index'
import Visitcard from './visitcard/index'
import { Box, Grid } from "@mui/material";

export default function Request() {

  const [requestType,setRequestType] = useState(1)

  const params = useParams()


  const checkRequestType = () => {
    switch(params?.id){
        case "IPC":return 1;
        case "Vacation":return 2;
        case "Trip":return 3;
        case "CorpNumber":return 4;
        case "VisitCard":return 5;
        case "IntAssessment":return 6;
        case "DrivingLicense":return 7;
    }
  }

  useEffect(() => {
    setRequestType(checkRequestType())
  },[])

  return (
    <Grid container spacing={5} rowSpacing={5} mt={5}>
    <Grid item xs={12}>
        {requestType === 1 && <IPC />}
        {requestType === 4 && <CorpNumber />}
        {requestType === 7 && <DrivingLicense />}
        {requestType === 6 && <Intassessment />}
        {requestType === 3 && <Trip />}
        {requestType === 2 && <Vacation />}
        {requestType === 5 && <Visitcard />}
        </Grid>
    </Grid>
  )
}
