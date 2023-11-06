
const User = require('../models/user');
const Profile = require('../models/profile');

  
  module.exports = {
    index,
    show,
    new: newProfile,
    create,
    delete: deleteProfile,
    put: update
  };
  
  async function index(req, res) {
    const user = await User.find({});
    res.render('user/index', { title: 'All Users', user });
  }
  
  async function show(req, res) {
 
    const user = await User.findById(req.params.id).populate('profile');
   
    const profile= await Profile.find({ _id: { $nin: user.profile } }).sort('name');
    res.render('profile/profile', { title: 'Profile Details', user, profile });
  }
  
  async function newProfile(req, res) {
 
res.render('profile/new', { title: 'Create Profile', errorMsg: '' });
  }
  
  async function show(req, res) {
   
    for (let key in req.body) {
      if (req.body[key] === '') delete req.body[key];
    }
    try {
     
      const user = await User.create(req.body);
     
      res.redirect(`/profile/${profile._id}`);
    } catch (err) {
     
      console.log(err);
      res.render('profile', { errorMsg: err.message });
    }}
  
    async function create(req, res) {
      const profile = await Profile.findById(req.params.id);
    
      for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
      }
      try {
     
        const profile = await Profile.create(req.body);
       
        res.redirect(`/profile/${profile._id}`);
      } catch (err) {
   
        console.log(err);
        res.render('profile/new', { errorMsg: err.message });
      }
    }
    async function deleteProfile(req, res) {
      const profile = await Profile.findOne({ 'userName._id': req.params.id, 'userName.user': req.user._id });
      if (!profile) return res.redirect('/profile');
      profile.userName.remove(req.params.id);
      await profile.save();
      res.redirect(`/profile/${profile._id}`);
    }

    async function update(req, res) {
      const profile = await Profile.findById(req.params.id);
      profile.cast.push(req.body.profileId);
      await profile.save();
      res.redirect(`/profile/${profile._id}`);
    }