import React, { useState } from "react";
import { Paper, Typography, Box } from "@mui/material";
import Login from ".././login/login";

const SignInOutContainer = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const paperStyle = { width: 340, margin: "20vh auto" };
  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  return (
    <Paper elevation={5} style={paperStyle}>
      <Login handleChange={handleChange} />
    </Paper>
  );
};

export default SignInOutContainer;
