import { Request, Response } from 'express';

import { loadRoutes } from './api/v1';
import { app } from './app';
import { client } from './drizzle-config';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 4000;

loadRoutes();

function errorHandler(req: Request, res: Response) {
  const errStatus = res.statusCode || 500;
  const errMsg = res.message || 'Something went wrong';
  res.status(errStatus).json({
    success: false,
    status: errStatus,
    message: errMsg,
    stack: process.env.NODE_ENV === 'development' ? res.stack : {},
  });
}

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

app.use(errorHandler);

app.listen(port, host, async () => {
  await client.connect();

  console.log(`[ ready ] http://${host}:${port}`);
});
