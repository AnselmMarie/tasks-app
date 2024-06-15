import { Request, Response } from 'express';

import { generateManualError } from '../../../utils/format-response.util';

const authCheckServiceController = async (req: Request, res: Response): Promise<void> => {
  const body = req.body;

  try {
    if (!body?.accessTokenReq) {
      throw await generateManualError('2005346', 'AUTH');
    }
    res.status(204).send();
  } catch (error) {
    if (error.errorCode) {
      res.status(error?.status).send(error);
    } else {
      const error = await generateManualError('9999999', 'GENERAL');
      res.status(error?.status).send(error);
    }
  }
};

export { authCheckServiceController };
