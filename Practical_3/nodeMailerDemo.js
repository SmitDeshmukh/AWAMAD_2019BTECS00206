var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'smit.deshmukh@walchandsangli.ac.in',
    pass: '$smitikaSmit2530$'
  }
});

var mailOptions = {
  from: 'smit.deshmukh@walchandsangli.ac.in',
  to: 'kiran.raut@walchandsangli.ac.in',
  subject: 'Sending Email using Node.js',
  text: "Hello, I'm Smit and This is Assignment 3"
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});