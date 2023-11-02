const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const gameSchema = new Schema({
name: {type: String},
});

module.exports = mongoose.model('Games', gameSchema);