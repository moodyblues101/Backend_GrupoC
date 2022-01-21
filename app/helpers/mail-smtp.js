"use strict";

const nodemailer = require('nodemailer');
const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_USER,
    SMTP_PASS,
} = process.env;

const tranporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: false,
    auth: {
        user: SMTP_USER,
        pass: SMTP_PASS
    }
})

// async function sendMailRegister(name, email, code) {
//     // Generar el link de activacion
//     const mailData = {
//         from: SMTP_USER,
//         to: email,
//         subject: "Welcome to Experiencias Q3 (HackAExperience)",
//         text: `Hi ${name}, to confirm account click`,
//         html: `Hi ${name}, to confirm account click`
//     };

//     const data = await tranporter.sendMail(mailData);
//     return data;
// }

// module.exports = {
//     sendMailRegister,
// };