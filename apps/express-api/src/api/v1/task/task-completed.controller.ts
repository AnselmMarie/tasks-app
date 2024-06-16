import { NextFunction, Request, Response } from 'express';

import { generateManualError } from '../../../utils/format-response.util';

import { updateTaskCompletedService } from './task-completed.service';
import { updateTaskCompletedValidate } from './task-completed.validate';

const updateTaskCompletedValidateController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { body, params } = req;
    await updateTaskCompletedValidate({ body, params }).catch((error) => {
      throw error;
    });
    next();
  } catch (err) {
    const errJson = await generateManualError('6435345', 'GENERAL');
    return res.status(errJson?.status).send({ ...errJson, message: err?.errors });
  }
};

const taskUpdateCompletedServiceController = async (req: Request, res: Response) => {
  try {
    const { body, params } = req;
    const results = await updateTaskCompletedService({
      body,
      params,
    }).catch((error) => {
      throw error;
    });

    res.send(results);
  } catch (error) {
    if (error.errorCode) {
      res.status(error?.status).send(error);
    } else {
      const error = await generateManualError('9999999', 'GENERAL');
      res.status(error?.status).send(error);
    }
  }
};

export { updateTaskCompletedValidateController, taskUpdateCompletedServiceController };
