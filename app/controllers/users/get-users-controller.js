"use strict";

const { findAllUsers } = require("../../repositories/users-repository");

async function getUsers(req, res) {
    try {
        const Users = await findAllUsers();

        res.status(200);
        res.send({ usersData: users });
    } catch (error) {
        console.log(error);
    }
}

module.exports = getUsers;