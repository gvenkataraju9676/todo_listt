import mongoose from 'mongoose';
import dotenv from 'dotenv';

import app from './app.js';

dotenv.config('path: ./env');

const PORT = process.env.PORT || 8080;
const DB = process.env.DATABASE;

mongoose
  .connect(DB)
  .then(() => console.log('DB connection successful'))
  .catch(err => console.log(err.message));

app.listen(PORT, err => {
  if (err) return console.log(err.message);
  console.log(`Server listening on port ${PORT}`);
});
