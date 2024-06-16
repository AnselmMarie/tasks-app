import { z } from 'zod';

export const passwordValidateUtil = z.string().min(5).max(10).trim();
export const tempPasswordValidateUtil = z.string().max(20).trim();
export const emailValidateUtil = z.string().email().trim();
export const dateValidateUtil = z.date().nullable();
export const nameValidateUtil = z.string().min(1).max(150);
export const descriptionSmValidateUtil = z.string().max(300).nullable();
export const descriptionMidValidateUtil = z.string().max(600).nullable();
export const descriptionBigValidateUtil = z.string().max(1200).nullable();
// .transform((val) => (val === '' ? null : val));
export const numberValidateUtil = z.number().nullable();
// .transform((val) => (val === '' ? null : val));
export const idValidateNotNullableUtil = z.string().min(1);
export const idValidateUtil = z
  .string()
  .max(255)
  .nullable()
  .transform((val) => (val === '' ? null : val));
export const urlValidateUtil = z
  .string()
  .regex(
    /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
    'Enter correct url!'
  )
  .max(255);
export const photoValidateUtil = z
  .string()
  .regex(
    /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
    'Enter correct url!'
  )
  .max(255);
