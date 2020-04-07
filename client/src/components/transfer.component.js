import React, { Component } from 'react';
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
            console.log(error)
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
                    <center><h1>Doon Public School</h1><br></br>
                    <h4>Ramzanpur,Begusarai,Bihar</h4><br></br>
                    <h5>(ISO 9001: 2015 CERTIFIED)</h5><br></br>
                    <h3>TRANSFER CERTIFICATE</h3><br></br><br></br></center>
              </div>
              <div className="form-row">
                    <div className="form-group col-md-4">
                    <label>School Code</label>
                    <input
                        type="number"
                        name="schoolCode"
                        className="form-control"
                        value={this.state.schoolCode}
                        onChange={this.onChangeschoolCode}
                    />
                    </div>
                   
                    <div className="form-group col-md-4">
                    <label>Admission No.</label>
                    <input
                        type="Number"
                        name="admissionNo"
                        className="form-control"
                        value={this.state.admissionNo}
                        onChange={this.onChangeadmissionNo}
                    />
                    </div>
                    <div className="form-group col-md-4">
                    <label>TC Number</label>
                    <input
                        type="Number"
                        name="TCNo"
                        className="form-control"
                        value={this.state.TCNo}
                        onChange={this.onChangeTCNo}
                    />
                    </div>
                    </div>
                    <div className="form-group">
                    <label>Name of the Student</label>
                    <input
                        type="text"
                        placeholder="Student Name"
                        name="nameOfTheStudent"
                        className="form-control"
                        value={this.state.nameOfTheStudent}
                        onChange={this.onChangenameOfTheStudent}
                    />
                    </div>


                    <div className="form-group">
                    <label>Mother's name</label>
                    <input
                        placeholder="Mother's name"
                        type="text"
                        name="motherName"
                        className="form-control"
                        value={this.state.motherName}
                        onChange={this.onChangemotherName}
                    />
                    </div>


                    <div className="form-group">
                    <label>Father's name</label>
                    <input
                        placeholder="Father's Name"
                        type="text"
                        name="fatherName"
                        className="form-control"
                        value={this.state.fatherName}
                        onChange={this.onChangefatherName}
                    />
                    </div>

                    <div className="form-row">
                    <div className="form-group col-md-6">
                    <label>Date of Birth</label>
                    <input
                        type="date"
                        placeholder="date of birth"
                        name="dateOfBirth"
                        className="form-control"
                        value={this.state.dateOfBirth}
                        onChange={this.onChangedateOfBirth}
                    />
                    </div>

                     <div className="form-group col-md-6">
                    <label>Last School Attended </label>
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
                    <div className="form-row">
                    <div className="form-group col-md-4">
                    <label>gender</label>
                    <input
                        placeholder="gender"
                        type="text"
                        name="gender"
                        className="form-control"
                        value={this.state.gender}
                        onChange={this.onChangegender}
                    />
                    </div>
                    <div className="form-group col-md-4">
                    <label>Nationality</label>
                    <input
                        placeholder="Nationality"
                        type="text"
                        name="nationality"
                        className="form-control"
                        value={this.state.nationality}
                        onChange={this.onChangenationality}
                    />
                    </div>
                    <div className="form-group col-md-4">
                    <label>category</label>
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
                    <div className="form-group">
                    <label>Place of Birth</label>
                    <input
                        placeholder="Place of Birth"
                        type="text"
                        name="placeOfBirth"
                        className="form-control"
                        value={this.state.placeOfBirth}
                        onChange={this.onChangeplaceOfBirth}
                    />
                    </div>
                    <div className="form-group">
                    <label>Date of Admission in School</label>
                    <input
                        placeholder="Date of Admission in School"
                        type="date"
                        name="dateOfAdmission"
                        className="form-control"
                        value={this.state.dateOfAdmission}
                        onChange={this.onChangedateOfAdmission}
                    />
                    </div>
                    <div className="form-group">
                    <label>Class in Which The Student Last Studied</label>
                    <input
                        placeholder="Class in Which The Student Last Studied"
                        type="text"
                        name="classLastStudied"
                        className="form-control"
                        value={this.state.classLastStudied}
                        onChange={this.onChangeclassLastStudied}
                    />
                    </div>
                    <div className="form-group">
                    <label>Subjects Studied</label>
                    <input
                        placeholder="Subjects Studied"
                        type="text"
                        name="subjectStudied"
                        className="form-control"
                        value={this.state.subjectStudied}
                        onChange={this.onChangesubjectStudied}
                    />
                    </div>
                    <div className="form-group">
                    <label>Shool/Board Last Examination Result</label>
                    <input
                        placeholder="Last Examination Result"
                        type="text"
                        name="lastExamResult"
                        className="form-control"
                        value={this.state.lastExamResult}
                        onChange={this.onChangelastExamResult}
                    />
                    </div>
                    <div className="form-group">
                    <label>Whether Qualified</label>
                    <input
                        placeholder="Whether Qualified"
                        type="text"
                        name="whetherQualified"
                        className="form-control"
                        value={this.state.whetherQualified}
                        onChange={this.onChangewhetherQualified}
                    />
                    </div>
                    <div className="form-group">
                    <label>Promoted to Class</label>
                    <input
                        placeholder="Promoted to class"
                        type="text"
                        name="promotedClass"
                        className="form-control"
                        value={this.state.promotedClass}
                        onChange={this.onChangepromotedClass}
                    />
                    </div>
                    <div className="form-group">
                    <label>Month up to which Student Paid Fees</label>
                    <input
                        placeholder="Month up to which Student Paid Fees"
                        type="text"
                        name="monthFees"
                        className="form-control"
                        value={this.state.monthFees}
                        onChange={this.onChangemonthFees}
                    />
                    </div>
                    <div className="form-group">
                    <label>Any Fees availed of/Concession</label>
                    <input
                        placeholder="Fee concession"
                        type="text"
                        name="feesConcession"
                        className="form-control"
                        value={this.state.feesConcession}
                        onChange={this.onChangefeesConcession}
                    />
                    </div>
                    <div className="form-group">
                    <label>Total Number of Working Days</label>
                    <input
                        placeholder="Working days"
                        type="Number"
                        name="workingDays"
                        className="form-control"
                        value={this.state.workingDays}
                        onChange={this.onChangeworkingDays}
                    />
                    </div>
                    <div className="form-group">
                    <label>Total Number of Days Present</label>
                    <input
                        placeholder="Days present"
                        type="Number"
                        name="presentDays"
                        className="form-control"
                        value={this.state.presentDays}
                        onChange={this.onChangepresentDays}
                    />
                    </div>
                    <div className="form-group">
                    <label>Whether in NCC/Scouts</label>
                    <input
                        placeholder="Whether in NCC/Scouts"
                        type="text"
                        name="scouts"
                        className="form-control"
                        value={this.state.scouts}
                        onChange={this.onChangescouts}
                    />
                    </div>
                    <div className="form-group">
                    <label>Games played/Other Activities</label>
                    <input
                        placeholder="Games played/Other Activities"
                        type="text"
                        name="gamesPlayed"
                        className="form-control"
                        value={this.state.gamesPlayed}
                        onChange={this.onChangegamesPlayed}
                    />
                    </div>
                    <div className="form-group">
                    <label>General Conduct</label>
                    <input
                        placeholder="General Conduct"
                        type="text"
                        name="generalConduct"
                        className="form-control"
                        value={this.state.generalConduct}
                        onChange={this.onChangegeneralConduct}
                    />
                    </div>
                    <div className="form-group">
                    <label>Date on which student's name was struck of the school</label>
                    <input
                        placeholder="Mention the date"
                        type="date"
                        name="dateStruck"
                        className="form-control"
                        value={this.state.dateStruck}
                        onChange={this.onChangedateStruck}
                    />
                    </div>
                    <div className="form-group">
                    <label>Date of Issue of certificate</label>
                    <input
                        placeholder="Date of Issue"
                        type="date"
                        name="dateOfIssue"
                        className="form-control"
                        value={this.state.dateOfIssue}
                        onChange={this.onChangedateOfIssue}
                    />
                    </div>
                    <div className="form-group">
                    <label>Reason for leaving the school</label>
                    <input
                        placeholder="Reason for leaving the school"
                        type="text"
                        name="reason"
                        className="form-control"
                        value={this.state.reason}
                        onChange={this.onChangereason}
                    />
                    </div>
                    <div className="form-group">
                    <label>Udise No</label>
                    <input
                        placeholder="Udise No"
                        type="Number"
                        name="udiseNo"
                        className="form-control"
                        value={this.state.udiseNo}
                        onChange={this.onChangeudiseNo}
                    />
                    </div>
                    <div className="form-group">
                    <label>Address</label>
                    <input
                        placeholder="Address"
                        type="text"
                        name="address"
                        className="form-control"
                        value={this.state.address}
                        onChange={this.onChangeaddress}
                    />
                    </div>
                    <div className="form-group">
                    <label>Any Other Remarks</label>
                    <input
                        placeholder="Remarks"
                        type="text"
                        name="remarks"
                        className="form-control"
                        value={this.state.remarks}
                        onChange={this.onChangeremarks}
                    />
                    </div>
            
                    <div className="form-group">
                        <input type="submit"
                         required 
                         value="Submit" 
                         className="btn btn-primary" />
                    </div>
                    <div className="form-group">
                        <input type="submit"
                         required 
                         value="Download" 
                         className="btn btn-primary" />
                    </div>
                </div>
                </form>
            </div>
        </div>
    );
  }
}


   