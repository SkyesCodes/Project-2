const express = require('express');
const router = express.Router();

const ensureLoggedIn = require('../config/ensureLoggedIn');
const gamesCtrl = require('../controllers/games');

router.get('/', gamesCtrl.index);

router.get('/new', ensureLoggedIn, gamesCtrl.new);

router.post('/index', ensureLoggedIn, gamesCtrl.create);

module.exports = router;