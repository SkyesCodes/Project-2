module.exports = {
    index
  }
  
  function index(req, res) {
    res.render('DuoFinder/index', {
      title: "All Profiles"
    });
  }