"use client";

import * as React from "react";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import {Avatar ,Button, CssBaseline, TextField, Box  ,Typography,Container ,  SxProps, Theme   } from '@mui/material'

import { Formik, Form, Field } from "formik";
import validationSchema from "./yup";
import { SignInFormValues } from "@/Types";
import "@/styles.css"



const initialValues: SignInFormValues = {
  email: "",
  password: "",
};

const containerSx: SxProps<Theme> = {
  marginTop: 8,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

export default function SignIn() {
  const handleSubmit = (values: SignInFormValues) => {
    console.log(values);
  };

  return (
    <div className="container">
      <CssBaseline />
      <Container component="main" maxWidth="xs" className="form-box">
        <Box sx={containerSx}>
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched }) => (
              <Form noValidate>
                <Field
                  as={TextField}
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                />
                <Field
                  as={TextField}
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  error={touched.password && Boolean(errors.password)}
                  helperText={touched.password && errors.password}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
              </Form>
            )}
          </Formik>
        </Box>
      </Container>
    </div>
  );
}
