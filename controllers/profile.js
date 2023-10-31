const user = require('../models/user')
module.exports = {
  profile
}

  
  function profile(req, res) {
    res.render(user, {
      title: "Profile"
    });
  }

 
