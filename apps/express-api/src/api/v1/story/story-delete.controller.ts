import { NextFunction, Request, Response } from 'express';

import { generateManualError } from '../../../utils/format-response.util';

import { deleteStoryService } from './story-delete.service';
import { deleteStoryValidate } from './story-delete.validate';

const deleteStoryValidateController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { params } = req;
    await deleteStoryValidate({ params }).catch((error) => {
      throw error;
    });
    next();
  } catch (err) {
    const errJson = await generateManualError('6435345', 'GENERAL');
    return res.status(errJson?.status).send({ ...errJson, message: err?.errors });
  }
};

const deleteStoryServiceController = async (req: Request, res: Response) => {
  try {
    const { params } = req;
    await deleteStoryService(params).catch((error) => {
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

export { deleteStoryValidateController, deleteStoryServiceController };
