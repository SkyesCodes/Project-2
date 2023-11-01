const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const profileSchema = new Schema({
  games: {
    type: String,
    required: true
  },
  ranks: {
    type: String,
   
  },
  userName: {
    type: Schema.Types.ObjectId,
  },
  userName: String,
});
// Compile the schema into a model and export it
module.exports = mongoose.model('Profile', profileSchema);