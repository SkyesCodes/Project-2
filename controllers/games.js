const Game = require('../models/games');


module.exports = {
  index,
  new: newGame,
  create
};

async function index(req, res) {
  const games = await Game.find({});
  res.render('games/index', { title: 'All Games', games });
}


async function newGame(req, res) {
  
  res.render('games/new', { title: 'Add Game', errorMsg: '' });
}

async function create(req, res) {
  // convert nowShowing's checkbox of nothing or "on" to boolean
  req.body.games = !!req.body.games;
  // Remove empty properties so that defaults will be applied
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }
  try {
    // Update this line because now we need the _id of the new movie
    const game = await Game.create(req.body);
    // Redirect to the new movie's show functionality 
    res.redirect(`/games/${game._id}`);
  } catch (err) {
    // Typically some sort of validation error
    console.log(err);
    res.render('games/new', { errorMsg: err.message });
  }
}