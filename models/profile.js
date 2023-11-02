const mongoose = require('mongoose');

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

module.exports = mongoose.model('Profile', profileSchema);