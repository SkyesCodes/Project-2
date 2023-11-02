const express = require('express');
const router = express.Router();

const ensureLoggedIn = require('../config/ensureLoggedIn');
const gamesCtrl = require('../controllers/games');

router.get('/', gamesCtrl.index);
// GET /movies/new
router.get('/new', ensureLoggedIn, gamesCtrl.new);
// GET /movies/:id (show functionality) MUST be below new route

// POST /movies
router.post('/', ensureLoggedIn, gamesCtrl.create);

module.exports = router;