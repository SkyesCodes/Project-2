
const User = require('../models/user');
const Profile = require('../views/profile/profile');
  
  module.exports = {
    index,
    show,
    new: newProfile,
  };
  
  async function index(req, res) {
    const user = await User.find({});
    res.render('user/index', { title: 'All Users', user });
  }
  
  async function show(req, res) {
    // Populate the cast array with performer docs instead of ObjectIds
    const user = await User.findById(req.params.id).populate('profile');
    // Mongoose query builder approach to retrieve performers not the movie:
      // Performer.find({}).where('_id').nin(movie.cast)
    // The native MongoDB approach uses a query object to find 
    // performer docs whose _ids are not in the movie.cast array like this:
    const profile= await Profile.find({ _id: { $nin: user.profile } }).sort('name');
    res.render('profile/profile', { title: 'Profile Details', user, profile });
  }
  
  function newProfile(req, res) {
    // We'll want to be able to render an  
    // errorMsg if the create action fails
    res.render('/profile', { title: 'Create Profile', errorMsg: '' });
  }
  
  async function show(req, res) {
    // Remove empty properties so that defaults will be applied
    for (let key in req.body) {
      if (req.body[key] === '') delete req.body[key];
    }
    try {
      // Update this line because now we need the _id of the new movie
      const user = await User.create(req.body);
      // Redirect to the new movie's show functionality 
      res.redirect(`/profile/${profile._id}`);
    } catch (err) {
      // Typically some sort of validation error
      console.log(err);
      res.render('/profile', { errorMsg: err.message });
    }}
  
