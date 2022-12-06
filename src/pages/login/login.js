import React, { useState } from "react";
import { Grid, Paper, Avatar, TextField, Button } from "@mui/material";
import { Formik, Form, Field, ErrorMessage ,touched} from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { setIsAuth } from "../../redux/login/loginAction";
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import { setGlobalLoadingStatusAC } from "../../redux/loading/loadingReducer";
import { styled } from '@mui/material/styles';
import CircularProgress from '@mui/material/CircularProgress';
const Fields = styled(Field)({
  '& label.Mui-focused': {
    color: 'green',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'green',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#e8eaf6',
    },
    '&:hover fieldset': {
      borderColor: '#4caf50',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'green',
    },
  },
});
const Login = () => {
  const paperStyle = {
    padding: 20,
    height: "50vh",
    margin: "0 auto",
  };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnstyle = { margin: "20px 0" };
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("გთხოვთ, შეიყვანოთ სწორი ელფოსტა")
      .required("საჭირო"),
    password: Yup.string().min(8, "შეიყვანეთ პაროლი").required("საჭირო"),
  });
  const isLoading = useSelector(({ LoadingReducer: { loading } }) => loading)

  const dispatch = useDispatch();

  const onSubmit = ({ email, password }) => {

    dispatch(setGlobalLoadingStatusAC(true))

    setTimeout(() => {
      dispatch(setIsAuth({
        email,
        password
      }));
      
    }, 1000);
  };
  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid align="center">
         <AssignmentIndIcon  fontSize="large"/>
          <h2>ავტორიზაცია</h2>
        </Grid>
        <Formik
          onSubmit={onSubmit}
          validationSchema={validationSchema}
          initialValues={{
            email: "",
            password: "",
            autocomplete: [],
            rememberMe: false,
          }}
        >
          {({
            isValid,
            handleChange,
            touched,
            handleBlur,
            handleSubmit,
            dirty,
            values,
          }) => (
            <Form>
              <Fields
                sx={{ mt: 1 }}
                as={TextField}
                label="მომხმარებელი"
                value={values.email}
                onChange={handleChange}
                name="email"
                type="email"
                onBlur={handleBlur}
                placeholder="მომხმარებელი"
                fullWidth
                required
                helperText={<ErrorMessage name="email" >{(msg) => <div style={{ color: "red", textAlign: "left" }}>{msg}</div>}</ErrorMessage>}
              />
              <Fields
                sx={{ mt: 1 }}
                as={TextField}
                label="პაროლი"
                value={values.password}
                onBlur={handleBlur}
                name="password"
                placeholder="მომხმარებელი"
                onChange={handleChange}
                type="password"
                fullWidth
                required
                helperText={<ErrorMessage name="password" />}
              />
              <Button
                type="submit"
                color="success"
                variant="contained"
                disabled={!isValid || !dirty}
                onClick={handleSubmit}
                style={btnstyle}
                fullWidth
              >
                {isLoading ? <CircularProgress/> : "შესვლა"}
              </Button>
            </Form>
          )}
        </Formik>
      </Paper>
    </Grid>
  );
};

export default Login;
