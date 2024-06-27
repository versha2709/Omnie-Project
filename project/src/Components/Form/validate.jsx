import * as Yup from "yup";

export const stateSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  description: Yup.string().required("Description is required"),
  country: Yup.string().required("Country is required"),
});

export const countrySchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  description: Yup.string().required("Description is required"),
  country: Yup.string().required("Country is required"),
});

export const brandSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  description: Yup.string().required("Description is required"),
  country: Yup.string().required("Country is required"),
});

export const leadStatusSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  description: Yup.string().required("Description is required"),
  country: Yup.string().required("Country is required"),
});

export const leadTypeSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  description: Yup.string().required("Description is required"),
  country: Yup.string().required("Country is required"),
});

export const roleSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  description: Yup.string().required("Description is required"),
  country: Yup.string().required("Country is required"),
});

export const genderSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  description: Yup.string().required("Description is required"),
  country: Yup.string().required("Country is required"),
});

export const storeSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  description: Yup.string().required("Description is required"),
  country: Yup.string().required("Country is required"),
});

export const layoutSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  description: Yup.string().required("Description is required"),
  country: Yup.string().required("Country is required"),
});

export const settingsSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  description: Yup.string().required("Description is required"),
  country: Yup.string().required("Country is required"),
});
