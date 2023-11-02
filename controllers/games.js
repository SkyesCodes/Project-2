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
  req.body.games = !!req.body.games;
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }
  try {
    const game = await Game.create(req.body);
    res.redirect(`/games/${game._id}`);
  } catch (err) {
    console.log(err);
    res.render('games/new', { errorMsg: err.message });
  }
}