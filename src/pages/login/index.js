import React, { useState } from "react";
import { Paper, Typography, Box } from "@mui/material";
import Login from ".././login/login";
import { motion } from "framer-motion";
import Grid from '@mui/material/Grid';
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
    
      <Grid
  container
  spacing={0}
  direction="column"
  alignItems="center"
  justifyContent="center"
  style={{ minHeight: '100vh' }}
><motion.div
      className="box"
      animate={{
        scale: [1, 1.1, 1.1, 1, 1],
        
        borderRadius: ["0%", "0%", "50%", "50%", "0%"]
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        
        repeatDelay: 1
      }}
    >

    <Paper elevation={5} style={paperStyle}>
      <Login handleChange={handleChange} />
    </Paper>
    </motion.div>
    </Grid>

  );
};

export default SignInOutContainer;
