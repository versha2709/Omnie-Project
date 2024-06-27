import React from "react";
import { Formik, Form, Field } from "formik";
import { Button, TextField, Typography } from "@mui/material";
import * as Yup from "yup";
import {
  stateSchema,
  countrySchema,
  brandSchema,
  leadStatusSchema,
  leadTypeSchema,
  roleSchema,
  genderSchema,
  storeSchema,
  layoutSchema,
  settingsSchema,
} from "./validate"; 

interface DynamicFormProps {
  sliceName: string;
  onClose: () => void;
}

const DynamicForm: React.FC<DynamicFormProps> = ({ sliceName, onClose }) => {
  let initialValues: any = {};
  let validationSchema: any = {};

  switch (sliceName) {
    case "stateSlice":
      initialValues = {
        name: "",
        description: "",
        country: "",
        status: "",
      };
      validationSchema = stateSchema;
      break;
    case "countrySlice":
      initialValues = {
        name: "",
        description: "",
        code: "",
        population: 0,
      };
      validationSchema = countrySchema;
      break;
    case "brandSlice":
      initialValues = {
        name: "",
        description: "",
        industry: "",
      };
      validationSchema = brandSchema;
      break;
    case "leadStatusSlice":
      initialValues = {
        name: "",
        description: "",
      };
      validationSchema = leadStatusSchema;
      break;
    case "leadTypeSlice":
      initialValues = {
        name: "",
        description: "",
      };
      validationSchema = leadTypeSchema;
      break;
    case "roleSlice":
      initialValues = {
        name: "",
        description: "",
        permissions: "",
      };
      validationSchema = roleSchema;
      break;
    case "genderSlice":
      initialValues = {
        name: "",
        description: "",
      };
      validationSchema = genderSchema;
      break;
    case "storeSlice":
      initialValues = {
        name: "",
        description: "",
        location: "",
      };
      validationSchema = storeSchema;
      break;
    case "layoutSlice":
      initialValues = {
        name: "",
        description: "",
        format: "",
      };
      validationSchema = layoutSchema;
      break;
    case "settingsSlice":
      initialValues = {
        name: "",
        description: "",
        value: "",
      };
      validationSchema = settingsSchema;
      break;
    default:
      initialValues = {};
      validationSchema = Yup.object().shape({});
      break;
  }

  const handleSubmit = (values: any) => {
    console.log("Form submitted with values:", values);
    onClose(); 

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form>
          <Typography variant="h6" gutterBottom>
            {sliceName === "stateSlice"
              ? "State Form"
              : sliceName === "countrySlice"
              ? "Country Form"
              : sliceName === "brandSlice"
              ? "Brand Form"
              : sliceName === "leadStatusSlice"
              ? "Lead Status Form"
              : sliceName === "leadTypeSlice"
              ? "Lead Type Form"
              : sliceName === "roleSlice"
              ? "Role Form"
              : sliceName === "genderSlice"
              ? "Gender Form"
              : sliceName === "storeSlice"
              ? "Store Form"
              : sliceName === "layoutSlice"
              ? "Layout Form"
              : sliceName === "settingsSlice"
              ? "Settings Form"
              : "Form"}
          </Typography>
          <Field
            as={TextField}
            name="name"
            label="Name"
            fullWidth
            error={errors.name && touched.name}
            helperText={errors.name && touched.name ? errors.name : ""}
          />
          <Field
            as={TextField}
            name="description"
            label="Description"
            fullWidth
            multiline
            rows={4}
            error={errors.description && touched.description}
            helperText={
              errors.description && touched.description
                ? errors.description
                : ""
            }
          />
          {sliceName === "countrySlice" && (
            <>
              <Field
                as={TextField}
                name="code"
                label="Code"
                fullWidth
                error={errors.code && touched.code}
                helperText={errors.code && touched.code ? errors.code : ""}
              />
              <Field
                as={TextField}
                name="population"
                label="Population"
                fullWidth
                type="number"
                error={errors.population && touched.population}
                helperText={
                  errors.population && touched.population
                    ? errors.population
                    : ""
                }
              />
            </>
          )}
          {sliceName === "roleSlice" && (
            <Field
              as={TextField}
              name="permissions"
              label="Permissions"
              fullWidth
              error={errors.permissions && touched.permissions}
              helperText={
                errors.permissions && touched.permissions
                  ? errors.permissions
                  : ""
              }
            />
          )}
          {sliceName === "storeSlice" && (
            <Field
              as={TextField}
              name="location"
              label="Location"
              fullWidth
              error={errors.location && touched.location}
              helperText={
                errors.location && touched.location ? errors.location : ""
              }
            />
          )}
          {sliceName === "layoutSlice" && (
            <Field
              as={TextField}
              name="format"
              label="Format"
              fullWidth
              error={errors.format && touched.format}
              helperText={errors.format && touched.format ? errors.format : ""}
            />
          )}
          {sliceName === "settingsSlice" && (
            <Field
              as={TextField}
              name="value"
              label="Value"
              fullWidth
              error={errors.value && touched.value}
              helperText={errors.value && touched.value ? errors.value : ""}
            />
          )}
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default DynamicForm;
