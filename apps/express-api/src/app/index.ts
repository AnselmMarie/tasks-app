import pkg from 'body-parser';
import cors from 'cors';
import express from 'express';

const { json } = pkg;
const app = express();
app.set('trust proxy', true);
app.use(json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

export { app };
