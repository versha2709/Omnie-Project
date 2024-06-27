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
import { useDispatch } from "react-redux";
import { addState } from "@/Redux/AddSlice";
import { AppDispatch } from "@/Redux/store";
import { DynamicFormProps } from "@/Types";

const DynamicForm: React.FC<DynamicFormProps> = ({ sliceName, onClose }) => {
  const dispatch: AppDispatch = useDispatch();

  let initialValues: any = {};
  let validationSchema: any = {};

  switch (sliceName) {
    case "stateSlice":
      initialValues = {
        name: "",
        description: "",
        country: "",
      };
      validationSchema = stateSchema;
      break;
    case "countrySlice":
      initialValues = {
        name: "",
        description: "",
        country: "",
      };
      validationSchema = countrySchema;
      break;
    case "brandSlice":
      initialValues = {
        name: "",
        description: "",
        country: "",
      };
      validationSchema = brandSchema;
      break;
    case "leadStatusSlice":
      initialValues = {
        name: "",
        description: "",
        country: "",
      };
      validationSchema = leadStatusSchema;
      break;
    case "leadTypeSlice":
      initialValues = {
        name: "",
        description: "",
        country: "",
      };
      validationSchema = leadTypeSchema;
      break;
    case "roleSlice":
      initialValues = {
        name: "",
        description: "",
        country: "",
      };
      validationSchema = roleSchema;
      break;
    case "genderSlice":
      initialValues = {
        name: "",
        description: "",
        country: "",
      };
      validationSchema = genderSchema;
      break;
    case "storeSlice":
      initialValues = {
        name: "",
        description: "",
        country: "",
      };
      validationSchema = storeSchema;
      break;
    case "layoutSlice":
      initialValues = {
        name: "",
        description: "",
        country: "",
      };
      validationSchema = layoutSchema;
      break;
    case "settingsSlice":
      initialValues = {
        name: "",
        description: "",
        country: "",
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
    dispatch(addState(values));
    onClose();
  };

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
          />
          <Field
            as={TextField}
            name="description"
            label="Description"
            fullWidth
            multiline
            rows={4}
            error={errors.description && touched.description}
          />
          {sliceName === "stateSlice" && (
            <Field as={TextField} name="country" label="Country" fullWidth />
          )}
          {sliceName === "countrySlice" && (
            <>
              <Field
                as={TextField}
                name="code"
                label="Code"
                fullWidth
                error={errors.code && touched.code}
              />
              <Field
                as={TextField}
                name="population"
                label="Population"
                fullWidth
                type="number"
                error={errors.population && touched.population}
              />
            </>
          )}
          {sliceName === "brandSlice" && (
            <Field
              as={TextField}
              name="industry"
              label="Industry"
              fullWidth
              error={errors.industry && touched.industry}
            />
          )}
          {sliceName === "roleSlice" && (
            <Field
              as={TextField}
              name="permissions"
              label="Permissions"
              fullWidth
              error={errors.permissions && touched.permissions}
            />
          )}
          {sliceName === "storeSlice" && (
            <Field
              as={TextField}
              name="location"
              label="Location"
              fullWidth
              error={errors.location && touched.location}
            />
          )}
          {sliceName === "layoutSlice" && (
            <Field
              as={TextField}
              name="format"
              label="Format"
              fullWidth
              error={errors.format && touched.format}
            />
          )}
          {sliceName === "settingsSlice" && (
            <Field
              as={TextField}
              name="value"
              label="Value"
              fullWidth
              error={errors.value && touched.value}
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
