import { NextFunction, Request, Response } from 'express';

import { generateManualError } from '../../../utils/format-response.util';

import { deleteTaskService } from './task-delete.service';
import { deleteTaskValidate } from './task-delete.validate';

const deleteTaskValidateController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { params } = req;
    await deleteTaskValidate({ params }).catch((error) => {
      throw error;
    });
    next();
  } catch (err) {
    const errJson = await generateManualError('6435345', 'GENERAL');
    return res.status(errJson?.status).send({ ...errJson, message: err?.errors });
  }
};

const deleteUpdateServiceController = async (req: Request, res: Response) => {
  try {
    const { params } = req;
    await deleteTaskService({ params }).catch((error) => {
      throw error;
    });

    res.status(204).send();
  } catch (err) {
    if (err.errorCode) {
      res.status(err?.status).send(err);
    } else {
      const error = await generateManualError('9999999', 'GENERAL');
      res.status(error?.status).send(error);
    }
  }
};

export { deleteTaskValidateController, deleteUpdateServiceController };
