"use strict";

const { findAllExperiences } = require("../../repositories/experiences-repository");

async function getExperiences(req, res) {
    try {
        const experiences = await findAllExperiences();

        res.status(200);
        res.send({ experiencesData: experiences });
    } catch (error) {
        console.log(error);
    }
}

module.exports = getExperiences;