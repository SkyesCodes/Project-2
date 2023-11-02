const express = require('express');
const router = express.Router();

const ensureLoggedIn = require('../config/ensureLoggedIn');
const finderCtrl = require('../controllers/finder');

router.get('/index', ensureLoggedIn, finderCtrl.index);

module.exports = router;