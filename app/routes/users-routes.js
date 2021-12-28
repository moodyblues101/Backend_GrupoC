"use strict";

const express = require('express');
const router = express.Router();
const getUsers = require('../controllers/users/get-users-controller');

router.route('/').get(getUsers);


module.exports = router;