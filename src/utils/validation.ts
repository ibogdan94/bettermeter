import * as yup from 'yup';

export const emailYup = yup
  .string()
  .nullable()
  .email('Please check e-mail address')
  .required('The field is required');
