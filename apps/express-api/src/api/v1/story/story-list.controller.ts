import { Request, Response } from 'express';

import { generateManualError } from '../../../utils/format-response.util';

import { getStoryListService } from './story-list.service';

const getStoryListServiceController = async (req: Request, res: Response) => {
  try {
    const { accessTokenReq } = req;
    const results = await getStoryListService({ accessTokenReq });

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

export { getStoryListServiceController };
