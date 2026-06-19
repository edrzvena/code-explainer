import express from 'express';
import cors from 'cors';
import { env } from './config/env';
import explainerRouter from './routes/explainer.routes';
import { notFoundHandler, globalErrorHandler } from './middlewares/error-handler';

const app = express();

app.use(cors({ origin: env.allowedOrigin }));
app.use(express.json());

app.get('/health', (_req, res) => {
  res.json({ status: 'ok', env: env.nodeEnv });
});

app.use('/api/explainer', explainerRouter);

app.use(notFoundHandler);
app.use(globalErrorHandler);

export default app;
