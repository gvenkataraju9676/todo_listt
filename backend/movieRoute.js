import express from 'express';
import movieController from './movieController.js';

const router = express.Router();

router
  .route('/')
  .get(movieController.getMovies)
  .post(movieController.createMovie);
router
  .route('/:id/:key?')
  .patch(movieController.updateMovie)
  .delete(movieController.deleteMovie);

export default router;
