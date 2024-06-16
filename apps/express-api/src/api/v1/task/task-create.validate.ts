import {
  idValidateNotNullableUtil,
  idValidateUtil,
  nameValidateUtil,
  numberValidateUtil,
} from '@tasks-app/utils';
import { BuildTypeEnum } from 'apps/express-api/src/drizzle-config';
import { z } from 'zod';

const createTaskSchema = z.object({
  body: z.object({
    name: nameValidateUtil,
    buildType: z.enum([BuildTypeEnum.BUILD, BuildTypeEnum.PURCHASE]),
    // buildType: z.mixed<BuildTypeEnum>().label('Type').oneOf(Object.values(BuildTypeEnum)),
    projectId: idValidateNotNullableUtil,
    storyId: idValidateUtil.optional(),
    amount: numberValidateUtil.optional(),
  }),
});

export const createTaskValidate = ({ body }: any) => {
  return createTaskSchema.safeParseAsync({
    body,
  });
};
