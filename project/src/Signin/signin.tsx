"use client";

import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Formik, Form, Field } from "formik";
import { RootState, AppDispatch } from "@/Redux/store";
import { authenticateUser } from "@/Redux/SigninSlice";
import validationSchema from "./yup";
import "../styles.css";

const initialValues = {
  username: "",
  password: "",
};

const containerSx: React.CSSProperties = {
  marginTop: 8,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const SignIn: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const router = useRouter();
  const authError = useSelector((state: RootState) => state.auth.error);
  const isLoading = useSelector((state: RootState) => state.auth.loading);
  const authToken: any = useSelector(
    (state: RootState) => state.auth.dataa?.token
  );

  const handleSubmit = async (values: typeof initialValues) => {
    dispatch(authenticateUser(values));
  };

  console.log(authToken);

  React.useEffect(() => {
    if (!isLoading) {
      if (authToken) {
        localStorage.setItem("token", authToken);
        router.push("/Utilities");
      } else if (authError) {
        alert("Wrong Credentials");
      }
    }
  }, [isLoading, authError, authToken, router]);

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
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="username"
                  autoFocus
                  error={touched.username && Boolean(errors.username)}
                  helperText={touched.username && errors.username}
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
                  disabled={isLoading}
                >
                  {isLoading ? "Signing in..." : "Sign In"}
                </Button>
              </Form>
            )}
          </Formik>
        </Box>
      </Container>
    </div>
  );
};

export default SignIn;
