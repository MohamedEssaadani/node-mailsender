const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "b5a7389b1108a6",
    pass: "82962de4eac951",
  },
});

/**
 * mail to send
 */
let mail = {
  from: "essaadanisimo@gmail.com",
  to: "essaadan80@gmail.com",
  subject: "Send mail using node.js",
  html: "<h1>Hello SMTP Email</h1>",
};

/**
 * Send mail
 */
transporter.sendMail(mail, (err, info) => {
  if (err) console.log(err);
  if (info) console.log(info);
});
