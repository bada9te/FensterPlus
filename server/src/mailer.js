const nodeMailer = require('nodemailer');


const transporter = nodeMailer.createTransport({
    host: 'smtp.strato.de',
    port: 465,
    secure: true,
    auth: {
        user: 'info@fensterplus.com',
        pass: '',
    },
});

/*
attachment attachment attachment
{
    filename: '',
    path: '',
    cid: 'uniqueid' // to embed in email
}
*/

/*
html html html
<h1>TEST<h1>
<img src="cid:uniqueid"/>
*/

const sendEmail = async(from, to, subject, html, attachments) => {
    const info = await transporter.sendMail({
        from: from,
        to: to,
        subject: subject,
        html: html,
        attachments: attachments,
    });

    return info;
}


module.exports = sendEmail;