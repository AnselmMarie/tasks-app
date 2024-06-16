import { Request, Response } from 'express';

import { generateManualError } from '../../../utils/format-response.util';

import { getTaskListService } from './task-list.service';

const getTaskListServiceController = async (req: Request, res: Response) => {
  try {
    const { accessTokenReq } = req;
    const results = await getTaskListService({ accessTokenReq });

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

export { getTaskListServiceController };
