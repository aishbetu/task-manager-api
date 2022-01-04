const sgMail = require('@sendgrid/mail')

// temporary solution for self sign cert error in sending email
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

// sgMail.send({
//     to: 'aishbetu@gmail.com',
//     from: 'aishbetu@gmail.com',
//     subject: 'Thi is my first email!!',
//     text: 'I hope this will actuall[y gets to you.'
// })

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'aishbetu@gmail.com',
        subject: 'Thans for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along the app.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'aishbetu@gmail.com',
        subject: 'Sorry to see you go!',
        text: `Goodbye, ${name}. I hope to see you sometime soon.`
    })
}

module.exports = {
    sendWelcomeEmail: sendWelcomeEmail,
    sendCancelationEmail // shortcut syntax
}