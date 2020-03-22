const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    nameOfTheStudent: {
        type: String,
        trim: true,
        required:true,
        minlength: 3
    },
    dateOfBirth: {
        type: Date,
        required:true,
    },
    gender: {
        type: String,
        required:true,
    },
    classAd:  {
        type: String,
        required:true,
    },
    fatherName: {
        type: String,
        trim: true,
        required:true,
        minlength: 3
    },
    motherName: {
        type: String,
        trim: true,
        required:true,
        minlength: 3
    },
    occupation: {
        type: String,
        trim: true,
        required:true,
        minlength: 3
    },
    permanentAddress: {
        type: String,
        trim: true,
        required:true,
        minlength: 3
    },
    phone:{
        type: Number,
        required:true,
        minlength:10
    },
    whatsAppNumber: {
        type: Number,
        required:true,
        minlength:10
    },
    email: {
        type: String,
        trim: true,
        required:true,
        minlength: 3
    },
    category:  {
        type: String,
        required:true
    },
    transport:  {
        type: String,
        required:true,
    },

  },{
      timestamps:true,
  });

  const User = mongoose.model('User', userSchema);

  module.exports=User;
  

  