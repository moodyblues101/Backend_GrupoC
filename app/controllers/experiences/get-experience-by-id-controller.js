"use strict";

const { findExperienceById } = require("../../repositories/experiences-repository");

async function getExperienceById(req, res) {
    try {
        const { id } = req.params;
        const experience = await findExperienceById(id);
        if (!experience) {
            res.status(400);
            res.send('error');
        }

        res.status(200);
        res.send(experience);
    } catch (error) {
        console.log(error);
    }
}

module.exports = getExperienceById;