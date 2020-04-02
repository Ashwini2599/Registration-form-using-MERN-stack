const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    nameOfTheStudent: {
        type: String,
        trim: true,
        minlength: 3
    },
    /*dateOfBirth: {
        type: Date,
        
    },*/
    gender: {
        type: String
    },
    classAd:  {
        type: String
    },
    fatherName: {
        type: String,
        trim: true,
        //minlength: 3
    },
    motherName: {
        type: String,
        trim: true,
        //minlength: 3
    },
    occupation: {
        type: String,
        trim: true,
        //minlength: 3
    },
    permanentAddress: {
        type: String,
        trim: true,
        //minlength: 3
    },
    phone:{
        type: Number,
        minlength:10
    },
    whatsAppNumber: {
        type: Number,
        //minlength:10
    },
    email: {
        type: String,
        trim: true,
        //minlength: 3
    },
    category:  {
        type: String
    },
    transport:  {
        type: String,
    },
  },{
      timestamps:true,
  });

  const User = mongoose.model('User', userSchema);

  module.exports=User;
  

  