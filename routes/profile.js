const express = require('express');
const router = express.Router();
// You'll be creating this controller module next
const profileCtrl = require('../controllers/movies');
const ensureLoggedIn = require('../config/ensureLoggedIn');
	
// GET /movies
router.get('/', profileCtrl.index);
// GET /movies/new
router.get('/new', ensureLoggedIn, profileCtrl.new);
// GET /movies/:id (show functionality) MUST be below new route
router.get('/:id', profileCtrl.show);
// POST /movies
router.post('/', ensureLoggedIn, profileCtrl.create);

router.post('/profile/:id/profile', ensureLoggedIn, profileCtrl.create);
// DELETE /reviews
router.delete('/profile/:id', ensureLoggedIn, profileCtrl.delete);
module.exports = router;