const { resolveInclude } = require('ejs');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const profile = require('/controllers/profile');

const userSchema = new Schema({
  name: String,
  googleId: {
    type: String,
    required: true
  },
  email: String,
  avatar: String,
}, 
{
  timestamps: true
});
//const profileSchema = new Schema({
//  res.render(profile)
//})

module.exports = mongoose.model('User', userSchema);
//module.exports = mongoose.model('User', profileSchema);
// sign in is a get request