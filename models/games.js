const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const gameSchema = new Schema({
name: {type: String},
});
// Compile the schema into a model and export it
module.exports = mongoose.model('Games', gameSchema);