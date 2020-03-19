//import Register from './Components/Register'
var mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
    nameOfTheStudent: String,
    dateOfBirth: Date,
    gender: String,
    classAd: String,
    fatherName: String,
    motherName: String,
    occupation: String,
    permanentAddress: String,
    phone:Number,
    whatsAppNumber: Number,
    email: String,
    category: String,
    transport: String

  });

  var userModel = mongoose.model('user', userSchema);

  var users =new userModel({nameOfTheStudent : 'Ashwini.k'})
  console.log(users);

  