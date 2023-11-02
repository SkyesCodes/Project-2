const express = require('express');
const router = express.Router();

const profileCtrl = require('../controllers/profile');
const ensureLoggedIn = require('../config/ensureLoggedIn');
	

router.get('/', profileCtrl.index);

router.get('/new', ensureLoggedIn, profileCtrl.new);

router.get('/:id', profileCtrl.show);

router.post('/', ensureLoggedIn, profileCtrl.create);

router.post('/profile/:id/profile', ensureLoggedIn, profileCtrl.create);

router.delete('/profile.username/:id', ensureLoggedIn, profileCtrl.delete);

module.exports = router;