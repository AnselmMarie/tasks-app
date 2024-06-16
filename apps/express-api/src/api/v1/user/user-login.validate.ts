import { emailValidateUtil, passwordValidateUtil } from '@tasks-app/utils';
import { UserTableInter } from 'apps/express-api/src/drizzle-config';
import { z } from 'zod';

const userLoginSchema = z.object({
  body: z.object({
    email: emailValidateUtil,
    password: passwordValidateUtil,
  }),
});

interface UserLoginValidateProps {
  body: Partial<UserTableInter>;
}

/**
 * @desc Making sure the request is valid based on the yup validations
 */
const userLoginValidate = ({ body }: UserLoginValidateProps) => {
  return userLoginSchema.safeParseAsync({
    body,
  });
};

export { userLoginValidate };
