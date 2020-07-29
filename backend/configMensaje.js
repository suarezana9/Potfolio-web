const nodemailer = require('nodemailer');

module.exports = (f) => {

 var transporter = nodemailer.createTransport({
 service: 'gmail',
 auth: {
 user: 'suarezsuarezana20gmail.com', 
 password: '243514329Ana'
 }
 });

const mailOptions = {
 from: `"${f.name}",<${f.email}>`,
 to: "luigijose.gutierrez@gmail.com", 
 subject: f.message,
 html: `
 <strong>Name:</strong> ${f.name} <br/>
 <strong>Email:</strong> ${f.email} <br/>
 <strong>Message:</strong> ${f.message}
 `
 };
transporter.sendMail(mailOptions, function (err, info) {
 if (err){
 console.log(err);
}else{
 console.log(info);
 
 }
});
}
