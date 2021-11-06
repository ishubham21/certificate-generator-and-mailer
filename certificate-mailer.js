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

        //these values are present in the .env file - can be configured
        auth: {
            user: process.env.USER_EMAIL,
            pass: process.env.USER_PASS
        }
    })

    //mail content that is to be sent to the contact
    let mailOptions = {
        
        from: 'ishubham2101@gmail.com',
        to: `${email}`,
        subject: 'Congratulations on completing all the labs!',
        html: `<h3>Hey, ${name}!</h3> <br> I am Shubham Gautam (Lead at GDSC RTU). 
        On behalf of Google DSC RTU, I want to congratulate you on completing all the quests under <b>30DaysOfGoogleCloud</b>. To honour your achivement, we have prepared a certificate for you to showcase on your LinkedIn. Please find the attached certificate and do not forget to tag GDSC RTU on your posts!`,

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