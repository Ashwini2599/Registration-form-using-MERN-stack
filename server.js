const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const stripe =require("stripe")(process.env.STRIPE_SECRET_KEY);
//const uuid = require("uuid/v4");

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());


const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true ,useUnifiedTopology:true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const usersRouter = require('./routes/users');
app.use('/users', usersRouter);

const { sendEmail } = require('./mail');
app.post('/add',(req,res)=>{
  console.log(req.body);
  sendEmail(req.body.email, req.body.fatherName)
  

})
app.post("/payment",(req,res)=>
{
  
  return stripe.customers.create({
    email:token.email,
    source:token.id
  }).then(customer=>{
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
})
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});