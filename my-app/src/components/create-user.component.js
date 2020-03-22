import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUser extends Component {
    constructor(props) {
        super(props);
    
        this.onChangenameOfTheStudent = this.onChangenameOfTheStudent.bind(this);
        this.onChangedateOfBirth =this.onChangedateOfBirth.bind(this);
        this.onChangegender =this.onChangegender.bind(this);
        this.onChangeclassAd =this.onChangeclassAd.bind(this);
        this.onChangefatherName =this.onChangefatherName.bind(this);
        this.onChangemotherName =this.onChangemotherName.bind(this);
        this.onChangeoccupation =this.onChangeoccupation.bind(this);
        this.onChangepermanentAddress =this.onChangepermanentAddress.bind(this);
        this.onChangephone =this.onChangephone.bind(this);
        this.onChangewhatsAppNumber =this.onChangewhatsAppNumber.bind(this);
        this.onChangeemail =this.onChangeemail.bind(this);
        this.onChangecategory =this.onChangecategory.bind(this);
        this.onChangetransport=this.onChangetransport.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        
        
        this.state={
            nameOfTheStudent: '',
            dateOfBirth: new Date(),
            gender: '',
            classAd: '',
            fatherName: '',
            motherName: '',
            occupation: '',
            permanentAddress: '',
            phone: 0,
            whatsAppNumber: 0,
            email: '',
            category:'',
            transport: ''
        }
    }
     
    
    onChangenameOfTheStudent(e) {
        this.setState({
          nameOfTheStudent: e.target.value
        })
      }
    onChangedateOfBirth(e) {
        this.setState({
          dateOfBirth: e.target.value
        })
      }
    onChangegender(e) {
        this.setState({
          gender: e.target.value
        })
      }
    onChangeclassAd(e) {
        this.setState({
          classAd: e.target.value
        })
      }
    onChangefatherName(e) {
        this.setState({
          fatherName: e.target.value
        })
      }
    onChangemotherName(e) {
        this.setState({
          motherName: e.target.value
        })
      }
    onChangeoccupation(e) {
        this.setState({
          occupation: e.target.value
        })
      }
    onChangepermanentAddress(e) {
        this.setState({
          permanentAddress: e.target.value
        })
      }
    onChangephone(e) {
        this.setState({
          phone: e.target.value
        })
      }
    onChangewhatsAppNumber(e) {
        this.setState({
         whatsAppNumber: e.target.value
        })
      }
    onChangeemail(e) {
        this.setState({
          email: e.target.value
        })
      }
    onChangecategory(e) {
        this.setState({
          category: e.target.value
        })
      }
    onChangetransport(e) {
        this.setState({
          transport: e.target.value
        })
      }


    onSubmit(e){
            e.preventDefault();
            const user={
                nameOfTheStudent: this.state.nameOfTheStudent,
                dateOfBirth: this.state.dateOfBirth,
                gender: this.state.gender,
                classAd: this.state.classAd,
                fatherName: this.state.fatherName,
                motherName: this.state.motherName,
                occupation: this.state.occupation,
                permanentAddress: this.state.permanentAddress,
                phone: this.state.phone,
                whatsAppNumber: this.state.whatsAppNumber,
                category: this.state.category,
                transport:this.state.transport
              }
              console.log(user);
              
              axios.post('http://localhost:5000/users/add', user)
              .then(res => console.log(res.data));
        
              window.location = '/payment';


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
                <div className="form-group"> 
                    <center><h2>Doon Public School</h2><br></br>
                    Ramzanpur,Begusarai,Bihar<br></br>
                    (ISO 9001: 2015 CERTIFIED)<br></br>
                    REGISTRATION FORM<br></br>
                    (play group to standard XI)<br></br><br></br></center>
              
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
                    <label>Date of Birth</label><br></br>
                    <input
                        name="dateOfBirth"
                        type="date"
                        value={this.state.dateOfBirth}
                        onChange={this.onChangedateOfBirth}
                    />
                    </div>

                    <div className="form-group">
                    <label>Gender</label>
                    <input
                        type="text"
                        placeholder="gender"
                        name="gender"
                        className="form-control"
                        value={this.state.gender}
                        onChange={this.onChangegender}
                    />
                    </div>

                    <div className="form-group">
                    <label>Class to which admission is sought</label>
                    <input
                        type="text"
                        placeholder="class admission"
                        name="classAd"
                        className="form-control"
                        value={this.state.classAd}
                        onChange={this.onChangeclassAd}
                    />
                    </div>
                    
                    <div className="form-group">
                    <label>Father's full name</label>
                    <input
                        placeholder="Father's Name"
                        type="text"
                        name="fatherName"
                        className="form-control"
                        value={this.state.fatherName}
                        onChange={this.onChangefatherName}
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
                    <label>Occupation</label>
                    <input
                        placeholder="Occupation"
                        type="text"
                        name="occupation"
                        className="form-control"
                        value={this.state.occupation}
                        onChange={this.onChangeoccupation}
                    />
                    </div>
                    
                    <div className="form-group">
                    <label>Permanent Address</label>
                    <input
                        placeholder="Permanent Address"
                        type="text"
                        name="permanentAddress"
                        className="form-control"
                        value={this.state.permanentAddress}
                        onChange={this.onChangepermanentAddress}
                    />
                    </div>
                    
                    <div className="form-group">
                    <label>Phone Number</label>
                    <input
                        placeholder="Phone Number"
                        type="number"
                        name="phone"
                        className="form-control"
                        value={this.state.phone}
                        onChange={this.onChangephone}
                    />
                    </div>
            
                    <div className="form-group">
                    <label>WhatsApp Number</label>
                    <input
                        placeholder="WhatsApp Number"
                        type="number"
                        name="whatsAppNumber"
                        className="form-control"
                        value={this.state.whatsAppNumber}
                        onChange={this.onChangewhatsAppNumber}
                    />
                    </div>
            
                    <div className="form-group">
                    <label>Email Id</label>
                    <input
                        placeholder="abc@somemail.com"
                        type="email"
                        name="email"
                        className="form-control"
                        value={this.state.email}
                        onChange={this.onChangeemail}
                    />
                    </div>
            
                    <div className="form-group">
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
                    <div className="form-group">
                    <label>Transport</label>
                    <input
                        placeholder="transport"
                        type="text"
                        name="transport"
                        className="form-control"
                        value={this.state.transport}
                        onChange={this.onChangetransport}
                    />
                    </div>
                    
                    
                    <div>
                    <p>Declaration by parent</p>
                    <input type="checkbox"></input>
                    <label>I hereby certify that all information given above is correct</label>
                    </div>
            
                    <div className="form-group">
                        <input type="submit"
                         required 
                         value="Register" 
                         className="btn btn-primary" />
                    </div>
                </div>
                </form>
            </div>
        </div>
    );
  }
}
