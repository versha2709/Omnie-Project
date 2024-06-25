// yup.ts
import * as yup from 'yup';

const validationSchema = yup.object({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
});

export default validationSchema;
