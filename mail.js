const nodemailer = require('nodemailer');
const getEmailData = (to, name) => {
  const output = `
     <ul>  
      <li>Hii ${name}</li>
    </ul>
    <p>Thank you for registering!</p>`;

    var mailOptions = {
      from: '"Ashwini"<process.env.SENDER_EMAIL>', // sender address
      to, // list of receivers
      subject: 'Online application registration', // Subject line
      html: output // html body
  };

return mailOptions;

}

const sendEmail = (to, name) => {
  var transporter = nodemailer.createTransport({
    service:'gmail',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: process.env.SENDER_EMAIL, // generated ethereal user
        pass: process.env.SENDER_EMAIL_PASSWORD // generated ethereal password
    },
    tls:{
      rejectUnauthorized:false
    }
  });


  const mail = getEmailData(to, name)

  transporter.sendMail(mail, function(error, response) {
    if(error) {
        console.log(error)
    } else {
        console.log( " email sent successfully")
    }
    transporter.close();
})


}

module.exports = { sendEmail }
