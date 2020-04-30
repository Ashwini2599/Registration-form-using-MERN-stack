import React, { Component } from 'react';
import doonlogo from '../doonlogo.png';
import {saveAs} from 'file-saver';
//import { application } from 'express/lib/express';
const axios = require('axios');


export default class TransferUser extends Component {
    constructor(props) {
        super(props);
    
        this.onChangeschoolCode=this.onChangeschoolCode.bind(this);
        this.onChangeadmissionNo=this.onChangeadmissionNo.bind(this);
        this.onChangeTCNo=this.onChangeTCNo.bind(this);
        this.onChangenameOfTheStudent = this.onChangenameOfTheStudent.bind(this);
        this.onChangemotherName =this.onChangemotherName.bind(this);
        this.onChangefatherName =this.onChangefatherName.bind(this);
        this.onChangedateOfBirth =this.onChangedateOfBirth.bind(this);
        this.onChangelastSchoolAttended=this.onChangelastSchoolAttended.bind(this);
        this.onChangegender =this.onChangegender.bind(this);
        this.onChangenationality=this.onChangenationality.bind(this);
        this.onChangecategory =this.onChangecategory.bind(this);
        this.onChangeplaceOfBirth=this.onChangeplaceOfBirth.bind(this);
        this.onChangedateOfAdmission=this.onChangedateOfAdmission.bind(this);
        this.onChangeclassLastStudied=this.onChangeclassLastStudied.bind(this);
        this.onChangesubjectStudied=this.onChangesubjectStudied.bind(this);
        this.onChangelastExamResult=this.onChangelastExamResult.bind(this);
        this.onChangewhetherQualified=this.onChangewhetherQualified.bind(this);
        this.onChangepromotedClass=this.onChangepromotedClass.bind(this);
        this.onChangemonthFees=this.onChangemonthFees.bind(this);
        this.onChangefeesConcession=this.onChangefeesConcession.bind(this);
        this.onChangeworkingDays=this.onChangeworkingDays.bind(this);
        this.onChangepresentDays=this.onChangepresentDays.bind(this);
        this.onChangescouts=this.onChangescouts.bind(this);
        this.onChangegamesPlayed=this.onChangegamesPlayed.bind(this);
        this.onChangegeneralConduct=this.onChangegeneralConduct.bind(this);
        this.onChangedateStruck=this.onChangedateStruck.bind(this);
        this.onChangedateOfIssue=this.onChangedateOfIssue.bind(this);
        this.onChangereason=this.onChangereason.bind(this);
        this.onChangeudiseNo=this.onChangeudiseNo.bind(this);
        this.onChangeaddress =this.onChangeaddress.bind(this);
        this.onChangeremarks=this.onChangeremarks.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        this.onClick=this.onClick.bind(this);
        
        
        this.state={
            schoolCode:'',
            admissionNo:'',
            TCNo:'',
            nameOfTheStudent: '',
            motherName:'',
            fatherName: '',
            dateOfBirth: new Date(),
            lastSchoolAttended: new Date(),
            gender: 'Boy',
            nationality:'',
            category:'general',
            placeOfBirth:'',
            dateOfAdmission: new Date(),
            classLastStudied:'',
            subjectStudied:'',
            lastExamResult:'',
            whetherQualified:'',
            promotedClass:'',
            monthFees:'',
            feesConcession:'',
            workingDays:'',
            presentDays:'',
            scouts:'',
            gamesPlayed:'',
            generalConduct:'',
            dateStruck:new Date(),
            dateOfIssue:new Date(),
            reason:'',
            udiseNo:'',
            address:'',
            remarks:''


        }
        
  
    }
  onChangeschoolCode(e){
      this.setState({
        schoolCode:e.target.value
      })
    }
    onChangeadmissionNo(e){
      this.setState({
        admissionNo:e.target.value
      })
    }
    onChangeTCNo(e){
      this.setState({
        TCNo:e.target.value
      })
    }
    onChangenameOfTheStudent(e) {
        this.setState({
          nameOfTheStudent: e.target.value
        })
      }
      onChangemotherName(e) {
        this.setState({
          motherName: e.target.value
        })
      }
      onChangefatherName(e) {
        this.setState({
          fatherName: e.target.value
        })
      }
    onChangedateOfBirth(e) {
        this.setState({
          dateOfBirth: e.target.value
        })
      }

     /* componentDidMount() {
        this.setState({
          schoolCode:TransferVerify.schoolCode,
          admissionNo:TransferVerify.admissionNo,
          TCNo:TransferVerify.TCNo,
          nameOfTheStudent:TransferVerify.nameOfTheStudent,
          fatherName:TransferVerify.fatherName,
          motherName:TransferVerify.motherName
        })
      }*/
    onChangelastSchoolAttended(e){
        this.setState({
            lastSchoolAttended: e.target.value
          })

    }
    onChangegender(e) {
        this.setState({
          gender: e.target.value
        })
      }
    onChangenationality(e) {
        this.setState({
          nationality: e.target.value
        })
      }
      onChangecategory(e) {
        this.setState({
          category: e.target.value
        })
      }
      onChangeplaceOfBirth(e) {
        this.setState({
          placeOfBirth: e.target.value
        })
      }
      onChangedateOfAdmission(e) {
        this.setState({
          dateOfAdmission: e.target.value
        })
      }
      onChangeclassLastStudied(e) {
        this.setState({
          classLastStudied: e.target.value
        })
      }
      onChangesubjectStudied(e) {
        this.setState({
          subjectStudied: e.target.value
        })
      }
      onChangelastExamResult(e) {
        this.setState({
          lastExamResult: e.target.value
        })
      }
      onChangewhetherQualified(e) {
        this.setState({
         whetherQualified : e.target.value
        })
      }
      onChangepromotedClass(e) {
        this.setState({
         promotedClass : e.target.value
        })
      }
      onChangemonthFees(e) {
        this.setState({
          monthFees: e.target.value
        })
      }
      onChangefeesConcession(e) {
        this.setState({
         feesConcession : e.target.value
        })
      }
      onChangeworkingDays(e) {
        this.setState({
          workingDays: e.target.value
        })
      }
      onChangepresentDays(e) {
        this.setState({
         presentDays : e.target.value
        })
      }
      onChangescouts(e) {
        this.setState({
         scouts : e.target.value
        })
      }
      onChangegamesPlayed(e) {
        this.setState({
          gamesPlayed: e.target.value
        })
      }
      onChangegeneralConduct(e) {
        this.setState({
          generalConduct: e.target.value
        })
      }
      onChangedateStruck(e) {
        this.setState({
          dateStruck: e.target.value
        })
      }
      onChangedateOfIssue(e) {
        this.setState({
          dateOfIssue: e.target.value
        })
      }
      onChangereason(e) {
        this.setState({
          reason: e.target.value
        })
      }
      onChangeudiseNo(e) {
        this.setState({
         udiseNo : e.target.value
        })
      }
      onChangeaddress(e) {
        this.setState({
         address : e.target.value
        })
      }
      onChangeremarks(e) {
        this.setState({
         remarks : e.target.value
        })
      }
      onClick=()=>{
        axios.post('/tusers/create-pdf',this.state)
        .then(()=>axios.get('fetch-pdf',{responseType:'blob'}))
        .then((res) => {
          const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
  
          saveAs(pdfBlob, 'TransferCerficate.pdf');
        })
      }

      onSubmit(e){
        e.preventDefault();
        const tuser={
            schoolCode:this.state.schoolCode,
            admissionNo:this.state.admissionNo,
            TCNo:this.state.TCNo,
            nameOfTheStudent: this.state.nameOfTheStudent,
            motherName: this.state.motherName,
            fatherName: this.state.fatherName,
            dateOfBirth: this.state.dateOfBirth,
            lastSchoolAttended:this.state.lastSchoolAttended,
            gender: this.state.gender,
            nationality:this.state.nationality,
            category: this.state.category,
            placeOfBirth: this.state.placeOfBirth,
            dateOfAdmission: this.state.dateOfAdmission,
            classLastStudied: this.state.classLastStudied,
            subjectStudied: this.state.subjectStudied,
            lastExamResult: this.state.lastExamResult,
            whetherQualified: this.state.whetherQualified,
            promotedClass: this.state.promotedClass,
            monthFees: this.state.monthFees,
            feesConcession: this.state.feesConcession,
            workingDays: this.state.workingDays,
            presentDays: this.state.presentDays,
            scouts: this.state.scouts,
            gamesPlayed: this.state.gamesPlayed,
            generalConduct: this.state.generalConduct,
            dateStruck: this.state.dateStruck,
            dateOfIssue: this.state.dateOfIssue,
            reason: this.state.reason,
            udiseNo:this.state.udiseNo,
            address:this.state.address,
            remarks:this.state.remarks
          }
          console.log(tuser);
        axios.post('/tusers/add', tuser)
    .then((res) => {
      console.log(res.data)
         })
  .catch(error => {
      console.log(error);
    
      
    })
    
      }
      render() {
        const formwrapper ={
            width: "100%",
            display: "normal",
            padding: "10px 40px",
            borderRadius: "10px",
            boxShadow: "0px 10px 50px #555",
            backgroundColor: "#ffffff",
            justifyContent: "center",
            alignItems: "center"
        }
    return (
        <div >
            <div style={formwrapper} >
                <form onSubmit={this.onSubmit}>
                  <div>
                <div style={{lineHeight:"30%"}} className="form-group"> 
                    <center><img src={doonlogo} alt="doonlogo" />
                    <h4>Ramzanpur,Begusarai,Bihar</h4><br></br>
                    <h5>(ISO 9001: 2015 CERTIFIED)</h5><br></br>
                    <h3>TRANSFER CERTIFICATE</h3><br></br><br></br></center>
              </div>
              <div className="form-group row">
  
                    <label className="col-sm-3 col-form-label">School Code</label>
                    <div className="col-sm-8">
                    <input
                        type="number"
                        name="schoolCode"
                        className="form-control"
                        value={this.state.schoolCode}
                        onChange={this.onChangeschoolCode}
                    />
                    </div>
                    </div>
                    
                    <div className="form-group row">
          
                    <label className="col-sm-3 col-form-label">Admission No.</label>
                    <div className="col-sm-8">
                    <input
                        type="Number"
                        name="admissionNo"
                        className="form-control"
                        value={this.state.admissionNo}
                        onChange={this.onChangeadmissionNo}
                    />
                    </div>
                    
                    </div>
                    <div className="form-group row">
                    <label className="col-sm-3 col-form-label">TC Number</label>
                    <div className="col-sm-8">
                    <input
                        type="Number"
                        name="TCNo"
                        className="form-control"
                        value={this.state.TCNo}
                        onChange={this.onChangeTCNo}
                    />
                    </div>
                  
                    </div>
                    <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Name of the Student</label>
                    <div className="col-sm-8">
                    <input
                        type="text"
                        placeholder="Student Name"
                        name="nameOfTheStudent"
                        className="form-control"
                        value={this.state.nameOfTheStudent}
                       onChange={this.onChangenameOfTheStudent}
                    />
                    </div>
                    </div>


                    <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Mother's name</label>
                    <div className="col-sm-8">
                    <input
                        placeholder="Mother's name"
                        type="text"
                        name="motherName"
                        className="form-control"
                        value={this.state.motherName}
                        onChange={this.onChangemotherName}
                    />
                    </div>
                    </div>


                    <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Father's name</label>
                    <div className="col-sm-8">
                    <input
                        placeholder="Father's Name"
                        type="text"
                        name="fatherName"
                        className="form-control"
                        value={this.state.fatherName}
                        onChange={this.onChangefatherName}
                    />
                    </div>
                    </div>

                    <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Date of Birth</label>
                    <div className="col-sm-8">
                    <input
                        type="date"
                        placeholder="date of birth"
                        name="dateOfBirth"
                        className="form-control"
                        value={this.state.dateOfBirth}
                        onChange={this.onChangedateOfBirth}
                    />
                    </div>
                    </div>
                  
                     <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Last School Attended </label>
                    <div className="col-sm-8">
                    <input
                        placeholder="Last School Attended"
                        type="date"
                        name="lastSchoolAttended"
                        className="form-control"
                        value={this.state.lastSchoolAttended}
                        onChange={this.onChangelastSchoolAttended}
                    />
                    </div>
                    </div>
                    
                    <div className="form-group row">
                    <label className="col-sm-3 col-form-label">gender</label>
                    <div className="col-sm-8">

                    <input
                        placeholder="gender"
                        type="text"
                        name="gender"
                        className="form-control"
                        value={this.state.gender}
                        onChange={this.onChangegender}
                    />
                  
                    </div>
                    </div>
                    <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Nationality</label>
                    <div className="col-sm-8">
                    <input
                        placeholder="Nationality"
                        type="text"
                        name="nationality"
                        className="form-control"
                        value={this.state.nationality}
                        onChange={this.onChangenationality}
                    />
                    </div>
                    </div>
                    <div className="form-group row">
                    <label className="col-sm-3 col-form-label">category</label>
                    <div className="col-sm-8">
                    <input
                        placeholder="category"
                        type="text"
                        name="category"
                        className="form-control"
                        value={this.state.category}
                        onChange={this.onChangecategory}
                    />
                    </div>
                    </div>
                  
                    <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Place of Birth</label>
                    <div className="col-sm-8">
                    <input
                        placeholder="Place of Birth"
                        type="text"
                        name="placeOfBirth"
                        className="form-control"
                        value={this.state.placeOfBirth}
                        onChange={this.onChangeplaceOfBirth}
                    />
                    </div>
                     
                    </div>
                    <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Date of Admission in School</label>
                    <div className="col-sm-8">
                    <input
                        placeholder="Date of Admission in School"
                        type="date"
                        name="dateOfAdmission"
                        className="form-control"
                        value={this.state.dateOfAdmission}
                        onChange={this.onChangedateOfAdmission}
                    />
                    </div>
                    </div>
                    <div className="form-group row">
                    <label className="col-sm-3 col-form-label">className in Which The Student Last Studied</label>
                    <div className="col-sm-8">
                    <input
                        placeholder="className in Which The Student Last Studied"
                        type="text"
                        name="classNameLastStudied"
                        className="form-control"
                        value={this.state.classNameLastStudied}
                        onChange={this.onChangeclassNameLastStudied}
                    />
                    </div>
                    
                    </div>
                    <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Subjects Studied</label>
                    <div className="col-sm-8">
                    <input
                        placeholder="Subjects Studied"
                        type="text"
                        name="subjectStudied"
                        className="form-control"
                        value={this.state.subjectStudied}
                        onChange={this.onChangesubjectStudied}
                    />
                    </div>
                    </div>
                    <div className="form-group row">
                    <label className="col-sm-3 col-form-label">School/Board Last Examination Result</label>
                    <div className="col-sm-8">
                    <input
                        placeholder="Last Examination Result"
                        type="text"
                        name="lastExamResult"
                        className="form-control"
                        value={this.state.lastExamResult}
                        onChange={this.onChangelastExamResult}
                    />
                    </div>
                    </div>
                    <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Whether Qualified</label>
                    <div className="col-sm-8">
                    <input
                        placeholder="Whether Qualified"
                        type="text"
                        name="whetherQualified"
                        className="form-control"
                        value={this.state.whetherQualified}
                        onChange={this.onChangewhetherQualified}
                    />
                    </div>
                    </div>
                    
                    <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Promoted to className</label>
                    <div className="col-sm-8">
                    <input
                        placeholder="Promoted to className"
                        type="text"
                        name="promotedclassName"
                        className="form-control"
                        value={this.state.promotedclassName}
                        onChange={this.onChangepromotedclassName}
                    />
                    </div>
                    </div>
                    <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Month up to which Student Paid Fees</label>
                    <div className="col-sm-8">
                    <input
                        placeholder="Month up to which Student Paid Fees"
                        type="text"
                        name="monthFees"
                        className="form-control"
                        value={this.state.monthFees}
                        onChange={this.onChangemonthFees}
                    />
                    </div>
                    </div>
                    <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Any Fees availed of/Concession</label>
                    <div className="col-sm-8">
                    <input
                        placeholder="Fee concession"
                        type="text"
                        name="feesConcession"
                        className="form-control"
                        value={this.state.feesConcession}
                        onChange={this.onChangefeesConcession}
                    />
                    </div>
                    </div>
                    <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Total Number of Working Days</label>
                    <div className="col-sm-8">
                    <input
                        placeholder="Working days"
                        type="Number"
                        name="workingDays"
                        className="form-control"
                        value={this.state.workingDays}
                        onChange={this.onChangeworkingDays}
                    />
                    </div>
                    </div>
                    <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Total Number of Days Present</label>
                    <div className="col-sm-8">
                    <input
                        placeholder="Days present"
                        type="Number"
                        name="presentDays"
                        className="form-control"
                        value={this.state.presentDays}
                        onChange={this.onChangepresentDays}
                    />
                    </div>
                    </div>
                    
                    <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Whether in NCC/Scouts</label>
                    <div className="col-sm-8">
                    <input
                        placeholder="Whether in NCC/Scouts"
                        type="text"
                        name="scouts"
                        className="form-control"
                        value={this.state.scouts}
                        onChange={this.onChangescouts}
                    />
                    </div>
                    </div>
                    <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Games played/Other Activities</label>
                    <div className="col-sm-8">
                    <input
                        placeholder="Games played/Other Activities"
                        type="text"
                        name="gamesPlayed"
                        className="form-control"
                        value={this.state.gamesPlayed}
                        onChange={this.onChangegamesPlayed}
                    />
                    </div>
                    </div>
                    <div className="form-group row">
                    <label className="col-sm-3 col-form-label">General Conduct</label>
                    <div className="col-sm-8">
                    <input
                        placeholder="General Conduct"
                        type="text"
                        name="generalConduct"
                        className="form-control"
                        value={this.state.generalConduct}
                        onChange={this.onChangegeneralConduct}
                    />
                    </div>
                    </div>
                    <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Date on which student's name was struck of the school</label>
                    <div className="col-sm-8">
                    <input
                        placeholder="Mention the date"
                        type="date"
                        name="dateStruck"
                        className="form-control"
                        value={this.state.dateStruck}
                        onChange={this.onChangedateStruck}
                    />
                    </div>
                    </div>
                    <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Date of Issue of certificate</label>
                    <div className="col-sm-8">
                    <input
                        placeholder="Date of Issue"
                        type="date"
                        name="dateOfIssue"
                        className="form-control"
                        value={this.state.dateOfIssue}
                        onChange={this.onChangedateOfIssue}
                    />
                    </div>
                    </div>
                    <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Reason for leaving the school</label>
                    <div className="col-sm-8">
                    <input
                        placeholder="Reason for leaving the school"
                        type="text"
                        name="reason"
                        className="form-control"
                        value={this.state.reason}
                        onChange={this.onChangereason}
                    />
                    </div>
                    </div>
                    <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Udise No</label>
                    <div className="col-sm-8">
                    <input
                        placeholder="Udise No"
                        type="Number"
                        name="udiseNo"
                        className="form-control"
                        value={this.state.udiseNo}
                        onChange={this.onChangeudiseNo}
                    />
                    </div>
                    </div><div className="form-group row">
                    <label className="col-sm-3 col-form-label">Address</label>
                    <div className="col-sm-8">
                    <input
                        placeholder="Address"
                        type="text"
                        name="address"
                        className="form-control"
                        value={this.state.address}
                        onChange={this.onChangeaddress}
                    />
                    </div>
                    </div>
                    <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Any Other Remarks</label>
                    <div className="col-sm-8">
                    <input
                        placeholder="Remarks"
                        type="text"
                        name="remarks"
                        className="form-control"
                        value={this.state.remarks}
                        onChange={this.onChangeremarks}
                    />
                    </div>
                    
                    
                   
                   <button className="btn btn-primary" onClick={this.onClick}>
                      Submit and Download PDF
                      </button>
                    
                    </div>
                </div>
                </form>
            </div>
        </div>
    );
  }
}


   