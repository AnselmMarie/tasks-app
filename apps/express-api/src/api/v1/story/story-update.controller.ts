import { NextFunction, Request, Response } from 'express';

import { generateManualError } from '../../../utils/format-response.util';

import { updateStoryService } from './story-update.service';
import { updateStoryValidate } from './story-update.validate';

const updateStoryValidateController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { body, params } = req;
    await updateStoryValidate({ body, params }).catch((error) => {
      throw error;
    });
    next();
  } catch (err) {
    const errJson = await generateManualError('6435345', 'GENERAL');
    return res.status(errJson?.status).send({ ...errJson, message: err?.errors });
  }
};

const updateStoryServiceController = async (req: Request, res: Response) => {
  try {
    const { body, params } = req;
    const results = await updateStoryService({ body, params }).catch((error) => {
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

export { updateStoryValidateController, updateStoryServiceController };
