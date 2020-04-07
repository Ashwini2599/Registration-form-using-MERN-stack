const trouter = require('../node_modules/express').Router();
let Tuser = require('../models/tuser.model');
//const nodemailer = require('nodemailer');

trouter.route('/add').post((req, res) => {
    const schoolCode=req.body.schoolCode;
    const admissionNo=req.body.admissionNo;
    const TCNo=req.body.TCNo;
    const nameOfTheStudent = req.body.nameOfTheStudent;
    const motherName=req.body.motherName;
    const fatherName=req.body.fatherName;
    const dateOfBirth = Date.parse(req.body.dateOfBirth);
    const lastSchoolAttended=Date.parse(req.body.lastSchoolAttended);
    const gender=req.body.gender;
    const nationality=req.body.nationality;
    const category=req.body.category;
    const placeOfBirth=req.body.placeOfBirth;
    const dateOfAdmission=Date.parse(req.body.dateOfAdmission);
    const classLastStudied=req.body.classLastStudied0;
    const subjectStudied=req.body.subjectStudied;
    const lastExamResult=req.body.lastExamResult;
    const whetherQualified=req.body.whetherQualified;
    const promotedToClass=req.body.promotedToClass;
    const monthFees=req.body.monthFees;
    const feesConcession=req.body.feesConcession;
    const workingDays=req.body.workingDays;
    const presentDays=req.body.presentDays;
    const scouts=req.body.scouts;
    const gamesPlayed=req.body.gamesPlayed;
    const generalConduct=req.body.generalConduct;
    const dateStruct=Date.parse(req.body.dateStruct);
    const dateOfIssue=Date.parse(req.body.dateOfIssue);
    const reason=req.body.reason;
    const udiseNo=req.body.udiseNo;
    const address=req.body.address;
    const remarks=req.body.remarks;

    
  
    const newTuser = new Tuser({
        schoolCode,
        admissionNo,
        TCNo,
        nameOfTheStudent,
        motherName,
        fatherName,
        dateOfBirth,
        lastSchoolAttended,
        gender,
        nationality,
        category,
        placeOfBirth,
        dateOfAdmission,
        classLastStudied,
        subjectStudied,
        lastExamResult,
        whetherQualified,
        promotedToClass,
        monthFees,
        feesConcession,
        workingDays,
        presentDays,
        scouts,
        gamesPlayed,
        generalConduct,
        dateStruct,
        dateOfIssue,
        reason,
        udiseNo,
        address,
        remarks
  });
  
  newTuser.save()
      .then(() => res.json('User added!'))
      .catch(err => res.status(400).json('Error: ' + err));
})

module.exports = trouter;