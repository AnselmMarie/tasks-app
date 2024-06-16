import { NextFunction, Request, Response } from 'express';

import { generateManualError } from '../../../utils/format-response.util';

import { updateTaskService } from './task-update.service';
import { updateTaskValidate } from './task-update.validate';

const updateTaskValidateController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { body, params } = req;
    await updateTaskValidate({ body, params }).catch((error) => {
      throw error;
    });
    next();
  } catch (err) {
    const errJson = await generateManualError('6435345', 'GENERAL');
    return res.status(errJson?.status).send({ ...errJson, message: err?.errors });
  }
};

const updateTaskServiceController = async (req: Request, res: Response) => {
  try {
    const { body, params } = req;
    const results = await updateTaskService({ body, params }).catch((error) => {
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

export { updateTaskValidateController, updateTaskServiceController };
