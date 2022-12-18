// /*
//  * Title:   Login System Advanced 
//  * Author:     Sneh Jaiswal
//  * Created On: Fri Jun 17 2022 10:57:15 am
//  */


// "use strict";
// const config = require("../../config");
// const nodemailer = require("nodemailer");

// const transporter = nodemailer.createTransport({

//   service: 'gmail',
//    host: "smtp.gmail.com",
//   port: 465,
//   secure: true,
//   auth: {
//     user:'snehjaiswal704951@gmail.com',
//     pass:'Sneh@12345',
//   },
// });

// function sendVerificationMail(to, url, text) {
//   const mailOptions = {
//     from: config.fromEmail,
//     to: to,
//     subject: "Email Verification",
//     html: `
// 		<div style="max-width: 500px; margin:auto; border: 10px solid #ddd; padding: 50px 20px; font-size: 110%;">
// 			<h2 style="text-align: center; text-transform: uppercase;color: teal;">Welcome!!!</h2>
// 			<a  style="color: black; padding: 40px 20px; margin: 10px 10; display: inline-block;">${url}</a>
// 		</div>`,
//   };

//   return transporter
//     .sendMail(mailOptions)
//     .then((response) => {
//       console.log("response",response);
//       return response;
//     })
//     .catch((error) => {
//       console.log("error",error);
//       return error;
//     });
// }

// module.exports = {
//   sendVerificationMail,
// };


var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  host : "tls://smtp.gmail.com",
  service: 'gmail',
  port:587,
  auth: {
    user: 'snehjaiswal704951@gmail.com',
    pass: 'Sneh@12345',
  }
});

function sendVerificationMail(to, url, text) {
  console.log("to",to);
  const mailOptions = {
    from: 'snehjaiswal704951@gmail.com',
    to: to,
    subject: "Email Verification",
    html: `
  		<div style="max-width: 500px; margin:auto; border: 10px solid #ddd; padding: 50px 20px; font-size: 110%;">
  			<h2 style="text-align: center; text-transform: uppercase;color: teal;">Welcome!!!</h2>
  			<a  style="color: black; padding: 40px 20px; margin: 10px 10; display: inline-block;">${url}</a>
  		</div>`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  })
}
module.exports = {
  sendVerificationMail,
};