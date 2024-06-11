import * as yup from 'yup';

export const passwordValidate = yup.string().min(5).max(10).trim();
export const tempPasswordValidate = yup.string().max(20).trim();
export const emailValidate = yup.string().email().trim();
export const dateValidate = yup
  .date()
  .nullable()
  .transform((curr, orig) => (orig === '' ? null : curr));
export const numberValidate = yup
  .number()
  .nullable()
  .transform((curr, orig) => (orig === '' ? null : curr));
export const idValidate = yup
  .string()
  .max(255)
  .nullable()
  .transform((curr, orig) => (orig === '' ? null : curr));
export const urlValidate = yup
  .string()
  .matches(
    /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
    'Enter correct url!'
  )
  .max(255);
export const photoValidate = yup
  .string()
  .matches(
    /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
    'Enter correct url!'
  )
  .max(255);
