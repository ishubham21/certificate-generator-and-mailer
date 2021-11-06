const nodemailer = require('nodemailer')
const dotenv = require('dotenv')
dotenv.config()

//exporting the funtion to be made available globally
module.exports = async (name, email) => {

    //configuring the gmail SMTP server using createTransport 
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: process.env.USER_EMAIL,
            pass: process.env.USER_PASS
        }
    })

    //mail content that is to be sent to the contact
    let mailOptions = {
        from: 'ishubham2101@gmail.com',
        to: `${email}`,
        subject: 'Bonjour!',
        text: `Hey, ${name}! Congratulations on completing all the labs. Here is your certificate.`,
        attachments: [{
            filename: `${name}.pdf`,
            path: `./${name}.pdf`,
            contentType: 'application/pdf'
          }]
    }

    //sendMail function to for final sending of messages
    await transporter.sendMail(mailOptions)
        .then(() => {
            console.log('Email is sent');
        })
        .catch((err) => {
            console.log('Error - ' + err);
        })
}