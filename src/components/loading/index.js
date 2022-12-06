import { Box, LinearProgress, CircularProgress  } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

export default function Loading() {
  const isLoading = useSelector(({ LoadingReducer: { loading } }) => loading)

  console.log(isLoading)
  if( !isLoading ) {
    return null
  }
  return (
    <div
      style={{
        position:'absolute',
        zIndex:10000,
        left:0, 
        top:0,
        right:0,
        bottom:0, 
        display: 'flex',
        alignContent:'center',
        justifyContent:'center',
        margin:'auto'
      }}
    >
      <Box sx={{ width: '100%' }}>
      <LinearProgress  color="error" />
    </Box>
    </div>
  );
}
