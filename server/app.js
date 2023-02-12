import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';

import categoriesRouter from './routes/categories.router.js';

const app = express();

/* Middlewares */
// Security
app.use(helmet());
app.use(
  cors({
    origin: process.env.ORIGIN_URL
  })
);

// Logging
app.use(morgan('combined'));

// Others
app.use(express.json());

/* Routes */
app.use('/', categoriesRouter);

export default app;
