import { NextFunction, Request, Response } from 'express';

import { generateManualError } from '../../../utils/format-response.util';

import { createTaskServiceInteractor } from './task-create.service';
import { createTaskValidate } from './task-create.validate';

const createTaskValidateController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { body } = req;
    await createTaskValidate({ body }).catch((error) => {
      throw error;
    });
    next();
  } catch (err) {
    const errJson = await generateManualError('6435345', 'GENERAL');
    return res.status(errJson?.status).send({ ...errJson, message: err?.errors });
  }
};

const taskCreateServiceController = async (req: Request, res: Response) => {
  try {
    const { body, accessTokenReq } = req;
    const results = await createTaskServiceInteractor({ body, accessTokenReq }).catch((error) => {
      throw error;
    });

    res.send(results);
  } catch (err) {
    if (err.errorCode) {
      res.status(err?.status).send(err);
    } else {
      const error = await generateManualError('9999999', 'GENERAL');
      res.status(error?.status).send(error);
    }
  }
};

export { createTaskValidateController, taskCreateServiceController };
