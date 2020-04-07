const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const tuserSchema = new Schema({
    schoolCode:{
        type:Number
    },
    admissionNo:{
        type:Number
    },
    TCNo: {
        type:Number,
        autoIncrement:true
    
    },
    nameOfTheStudent: {
        type: String,
        trim: true,
        maxlength: 50,
        //required:true
    },
    motherName:{
        type:String,
        //required:true
    },
    fatherName:{
        type:String,
        //required:true
    },
    dateOfBirth: {
        type: Date,
        //reuqired:true
    },
    lastSchoolAttended :{
        type: Date,
       // reuqired:true
    },
    gender: {
        type: String
    },
    
    nationality:{
        type:String,
        //required:true
    },
    category:{
        type:String,
        //required:true
    },
    placeOfBirth:{
        type:String,
        //required:true
    },
    dateOfAdmission:{
        type:Date,
        //required:true
    },
    classLastStudied:{
        type:String,
        //required:true
    },
    subjectStudied:{
        type:String,
       // required:true
    },
    lastExamResult:{
        type:String,
        //required:true
    },
    whetherQualified:{
        type:String,
        //required:true
    },
    promotedClass:{
        type:String,
        //required:true
    },
    monthlyFees:{
        type:String,
        //required:true
    },

    feesConcession:{
        type:String,
        //required:true
    },
    workingDays:{
        type:Number,
        //required:true
    },
    presentDays:{
        type:Number,
        //required:true
    },
    scouts:{
        type:String,
        //required:true
    },
    gamesPlayed:{
        type:String,
        //required:true
    },
    generalConduct:{
        type:String,
        //required:true
    },
    dateStruck:{
        type:Date,
        //required:true
    },
    dateOfIssue:{
        type:Date,
        //required:true
    },
    reason:{
        type:String,
        //required:true
    },
    udiseNo:{
        type:Number,
        //required:true
    },
    address:{
        type:String,
       // required:true
    },
    remarks:{
        type:String
    }
},{
    timestamps:true,
});

const Tuser = mongoose.model('Tuser', tuserSchema);

module.exports=Tuser;
