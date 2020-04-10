"use strict";
const nodemailer = require('nodemailer');

async function main(){
    let transporter = nodemailer.createTransport({
        host: 'smtp.mailtrap.io',
        port: 2525,
        secure: false,
        auth: {
           user: '530eaf547fe732',
           pass: 'b7eb7838d5f5ec'
        }
    });

    const info = await transporter.sendMail({
        from: 'elonmusk@tesla.com', // Sender address
        to: 'fart@email.com',         // List of recipients
        subject: 'howzit', // Subject line
        text: 'Have the most fun you can in a car. Get your Tesla today!' // Plain text body
    });
};

main().catch(console.error);
