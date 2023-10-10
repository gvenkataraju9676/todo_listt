import Movie from './movieModel.js';

const getMovies = async (req, res) => {
  const movies = await Movie.find();
  res.status(200).json({
    data: movies
  });
};

const createMovie = async (req, res) => {
  await Movie.create(req.body);
  const movies = await Movie.find();
  res.status(200).json({
    data: movies
  });
};

const updateMovie = async (req, res) => {
  try {
    if (req.params.id === '-1') {
      req.params.id = (
        await Movie.findOne({ key: { $eq: req.params.key } })
      )._id;
    }
    await Movie.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    const movies = await Movie.find();
    res.status(200).json({
      data: movies
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: 'Something went wrong' });
  }
};

const deleteMovie = async (req, res) => {
  if (req.params.id === '-1') {
    req.params.id = (await Movie.findOne({ key: { $eq: req.params.key } }))._id;
  }
  await Movie.findByIdAndDelete(req.params.id);
  const movies = await Movie.find();
  res.status(200).json({
    data: movies
  });
};

const obj = {
  getMovies,
  createMovie,
  updateMovie,
  deleteMovie
};

export default obj;
