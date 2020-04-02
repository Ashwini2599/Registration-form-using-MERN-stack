const router = require('../node_modules/express').Router();
let User = require('../models/user.model');
const nodemailer = require('nodemailer');
const stripe =require("stripe")("sk_test_Kmf6ho9F40pkwPTJotOGSObj00TbcUzzmT");

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

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
  <ul>
    Student details:
  </ul>
  </li>Name of the student : ${req.body.nameOfTheStudent}</li>
  <li>Date of Birth : ${req.body.dateOfBirth}</li>
  <li>Gender : ${req.body.gender}</li>
  <li>Class to which addmission is sought : ${req.body.classAd}</li>
  <li>Father name : ${req.body.fatherName}</li>
  <li>Mother name : ${req.body.motherName}</li>
  <li>Permanent address : ${req.body.permanentAddress}</li>
  <li>Phone number : ${req.body.phone}</li>
  <li>WhatsApp number : ${req.body.whatsAppNumber}</li>
  <li>Email : ${req.body.email}</li>
  <li>Category : ${req.body.category}</li>
  <li>Transport requirement : ${req.body.transport}</li>`

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
  to: process.env.RECIEVER_EMAIL,// list of receivers
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
  
  /*return stripe.customers.create({
    email:token.email,
    source:token.id
  })
  .then(customer=>{
      stripe.charges.create({
        amount : 100,
        currency: 'inr',
        customer: customer.id,
        receipt_email :token.email,
        shipping:{
        name:token.card.name,
        address:{
          country:token.card.address_country
        }
      }
    },)
  })
  .then(result =>res.status(200).json(result))
  .catch(err=> console.log(err))
})*/




router.route('/:id').get((req, res) => {
  User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json('User deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  User.findById(req.params.id)
    .then(user => {
      user.nameOfTheStudent = req.body.nameOfTheStudent;
      user.dateOfBirth = Date.parse(req.body.dateOfBirth);
      user.gender=req.body.gender;
      user.classAd=req.body.classAd;
      user.fatherName=req.body.fatherName;
      user.motherName=req.body.motherName;
      user.permanentAddress=req.body.permanentAddress;
      user.phone=Number(req.body.phone);
      user.whatsAppNumber=Number(req.body.whatsAppNumber);
      user.email=req.body.email;
      user.category=req.body.category;
      user.transport=req.body.transport;
      
      user.save()
      .then(() => res.json('User updated!'))
      .catch(err => res.status(400).json('Error: ' + err));
  })
  .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;