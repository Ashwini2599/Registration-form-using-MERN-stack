const router = require('../node_modules/express').Router();
let User = require('../models/user.model');
const nodemailer = require('nodemailer');
const stripe =require("stripe")("sk_test_Kmf6ho9F40pkwPTJotOGSObj00TbcUzzmT");

/*router.route('/').get((req, res) => {
  const { email } = req.body;
  const user =  User.findOne({ email });
    if (user) throw Error('User already exists');
    
});*/

router.route('/add').post((req, res) => {

  const nameOfTheStudent = req.body.nameOfTheStudent;
  const dateOfBirth = Date.parse(req.body.dateOfBirth);
  const gender=req.body.gender;
  const classAd=req.body.classAd;
  const fatherName=req.body.fatherName;
  const motherName=req.body.motherName;
  const permanentAddress=req.body.permanentAddress;
  const phone=Number(req.body.phone);
  const whatsAppNumber=Number(req.body.whatsAppNumber);
  const email=req.body.email;
  const category=req.body.category;
  const transport=req.body.transport;
  

  const newUser = new User({
    //registrationId,
    nameOfTheStudent,
    dateOfBirth,
    gender,
    classAd,
    fatherName,
    motherName,
    permanentAddress,
    phone,
    whatsAppNumber,
    email,
    category,
    transport
});

newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));

  const htmlEmail = `
   <ul>  
    <li>Hii ${req.body.fatherName}</li>
  </ul>
  <p>Thank you for registering!!!  Your form has been submitted successfully.Your paymrnt is still due.</p>`

  const htmlEmailSchool=`
  <h2>
    Student details:
  </h2>
  <Table>
  <tr>
  <td>Name of the student</td>
  <td> ${req.body.nameOfTheStudent}</td>
  </tr>
  <tr>
  <td>Date of Birth</td>
  <td>${req.body.dateOfBirth}</td>
  </tr>
  <tr>
  <td>Gender</td>
  <td>${req.body.gender}</td>
  </tr>
  <tr>
  <td>Class to which addmission is sought</td>
  <td>${req.body.classAd}</td>
  </tr>
  <tr>
  <td>Father name</td>
  <td>${req.body.fatherName}</td>
  </tr>
  <tr>
  <td>Mother name</td>
  <td>${req.body.motherName}</td>
  </tr>
  <tr>
  <td>Permanent address</td>
  <td>${req.body.permanentAddress}</td>
  </tr>
  <tr>
  <td>Phone number</td>
  <td>${req.body.phone}</td>
  </tr>
  <tr>
  <td>WhatsApp number</td>
  <td>${req.body.whatsAppNumber}</td>
  </tr>
  <tr>
  <td>Email</td>
  <td>${req.body.email}</td>
  </tr>
  <tr>
  <td>Category</td>
  <td>${req.body.category}</td>
  </tr>
  <tr>
  <td>Transport requirement</td>
  <td>${req.body.transport}</td>
  </tr>`

let transporter = nodemailer.createTransport({
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

let mailOptions = {
  from: '"Ashwini"<process.env.SENDER_EMAIL>', // sender address
  to:req.body.email,// list of receivers
  subject: 'Online application registration', // Subject line
  html: htmlEmail// html body
};

let mailOptionsSchool = {
  from: '"Ashwini"<process.env.SENDER_EMAIL>', // sender address
  to:process.env.RECIEVER_EMAIL,// list of receivers
  subject: 'Online application registration', // Subject line
  html: htmlEmailSchool// html body
};

transporter.sendMail(mailOptions, function(error, response) {
if(error) {
    console.log(error)
} else {
    console.log( "email sent successfully")
}
})
transporter.sendMail(mailOptionsSchool, function(error, response) {
  if(error) {
      console.log(error)
  } else {
      console.log( "email sent to school successfully")
  }
transporter.close();
})
});
  
router.route("/payment").post((req,res) => {

 const {token}= req.body;
  return stripe.customers
  .create({
    email:token.email,
    source:token.id
  })
  .then(customer=>{
      stripe.charges.create({
        amount : 100,
        currency: 'inr',
        customer: customer.id,
        receipt_email :token.email
    })
  })
  .then(result =>res.status(200).json(result))
  .catch(err=> console.log(err))
})







module.exports = router;