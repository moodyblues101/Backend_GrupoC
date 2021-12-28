"use strict";

const { findAllBookings } = require("../../repositories/bookings-repository");

async function getBookings(req, res) {
    try {
        const experiences = await findAllBookings();

        res.status(200);
        res.send({ bookingsData: bookings });
    } catch (error) {
        console.log(error);
    }
}

module.exports = getBookings;