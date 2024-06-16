import { NextFunction, Request, Response } from 'express';

import { generateManualError } from '../../../utils/format-response.util';

import { createStoryService } from './story-create.service';
import { createStoryValidate } from './story-create.validate';

const createStoryValidateController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { body } = req;
    await createStoryValidate({ body }).catch((error) => {
      throw error;
    });
    next();
  } catch (err) {
    const errJson = await generateManualError('6435345', 'GENERAL');
    return res.status(errJson?.status).send({ ...errJson, message: err?.errors });
  }
};

const createStoryServiceController = async (req: Request, res: Response) => {
  try {
    const { body, accessTokenReq } = req;
    const results = await createStoryService({ body, accessTokenReq }).catch((error) => {
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

export { createStoryValidateController, createStoryServiceController };
