import mongoose from 'mongoose';

const movieSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: [true, 'Name must be required']
  },
  genre: {
    type: String,
    required: true
  },
  director: {
    type: String,
    required: true
  },
  key: {
    type: String,
    unique: true,
    required: true
  }
});

// movieSchema.pre(/find/, function () {
//   this.find().sort('completed');
// });

/*
todoSchema.post(/save|find/, function () {
  console.log(this.dueDate);
  let newDate = this.dueDate;
  if (this.dueDate && this.dueDate.contains('T'))
    newDate = this.dueDate.split(', ').join('T') + '.000Z';
  let date = new Date(newDate);
  this.dueDate = date.toLocaleString();
  this.dueDate = this.dueDate
    .split('T')
    .join(' ')
    .slice(0, this.dueDate.indexOf('.'));
});
*/

const Movie = mongoose.model('Movie', movieSchema);

export default Movie;
