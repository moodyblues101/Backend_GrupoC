"use strict";

const express = require('express');
const router = express.Router();
const getExperiences = require('../controllers/experiences/get-experiences-controller');
const findExperienceById = require('../controllers/experiences/get-experience-by-id-controller');

router.route('/').get(getExperiences);
router.route('/:id').get(findExperienceById);

module.exports = router;