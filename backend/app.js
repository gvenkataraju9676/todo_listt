import express from 'express';
import cors from 'cors';

import movieRouter from './movieRoute.js';

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

app.use('/api/v1/movies/', movieRouter);
export default app;
