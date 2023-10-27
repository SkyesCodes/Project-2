module.exports = {
    profile
  }
  
  function profile(req, res) {
    res.render("profile", {
      title: "Profile"
    });
  }