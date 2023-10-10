import mongoose from 'mongoose';
import dotenv from 'dotenv';
import fs from 'fs';
import Movie from './movieModel.js';

dotenv.config('path: ./env');

const DB = process.env.DATABASE;

mongoose.connect(DB);

const data = JSON.parse(fs.readFileSync('./data.json', 'utf8'));

const importData = async () => {
  await Movie.deleteMany();
  await Movie.create(data);
  console.log('Data imported successfully');
  process.exit(0);
};

if (process.argv[2] === '--i') {
  importData();
}
