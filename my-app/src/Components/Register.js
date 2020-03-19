import axios from'axios';
import React, { Component } from 'react';

export default class Register extends Component{
    state={
      nameOfTheStudent: '',
      dateOfBirth: '',
      gender: '',
      classAd: '',
      fatherName: '',
      motherName: '',
      occupation: '',
      permanentAddress: '',
      phone: '',
      whatsAppNumber: '',
      email: '',
      category:'',
      transport: ''
    }

    loadOrShowMessage(){
      if(this.state.loading){
        return<p>Loding...</p>
      }
      else{
        return<p>{this.state.message}</p>
      }
    }
    handleChange(event){
    this.setState({
      [event.target.name] : event.target.value
    })
       
    }

    handleSubmit(event){
        event.preventDefault();//prevents from reloading

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
    this.setState({
      loading:true
    })
    axios.post('/t/ctp7q-1584547470/post',user)
    .then(res=>{
      console.log(res);
      this.setState({
        loading:false,
        message:res.data
      })
    })
    .catch(err=>{
      console.log(err);
      this.setState({
        loading:false
      })
      
    })

    
};


render() {
    const dropdown_style = {
        color: "rgb(68, 66, 66)",
        fontSize : "1em",
        fontWeight : "lighter"
      }
      
      return (
      <div className="wrapper" >
        <div className="form-wrapper" >
          
            <form onSubmit={this.handleSubmit.bind(this)}>
            <h1>Doon Public School</h1><br></br>
          <h2>Ramzanpur,Begusarai,Bihar</h2><br></br>
          <h3>(ISO 9001: 2015 CERTIFIED)</h3><br></br>
          <h2>REGISTRATION FORM</h2><br></br>
          <h3>(play group to standard XI)</h3><br></br><br></br>
              <div className="nameOfTheStudent">
              <label htmlFor="nameOfTheStudent">Name of the Student</label>
              <input
                type="text"
                placeholder="Student Name"
                name="nameOfTheStudent"
                required
                value={this.state.nameOfTheStudent}
                onChange={this.handleChange.bind(this)}
              />
            </div>
            <div className="dateOfBirth">
              <label htmlFor="dateOfBirth">Date of Birth</label>
              <input
                type="date"
                placeholder="Date of Birth"
                name="dateOfBirth"
                value={this.state.dateOfBirth}
                onChange={this.handleChange.bind(this)}
              />
            </div>
            
            <div className="gender">
            <label >Gender</label>
            <fieldset data-role="controlgroup">
               <input className="radio"
                type="radio"
                name="gender"
                value={this.state.gender}
                onChange={this.handleChange.bind(this)}
              /><label className="radio-label">Boy</label>
              
              <input className="radio"
                type="radio"
                name="gender"
                value={this.state.gender}
                onChange={this.handleChange.bind(this)}
              /><label className="radio-label" >Girl</label>
              </fieldset>
            </div>
            
            <div className="classAd">
              <label htmlFor="classAd">Class to which admission is sought</label>
            
              <select style={dropdown_style} name = "dropdown">
             <option value = "Play Group" defaultValue>Play Group</option>
              <option value = "1st Grade">1st Grade</option>
              <option value = "2nd Grade">2nd Grade</option>
              <option value = "3rd Grade">3rd Grade</option>
              <option value = "4th Grade">4th Grade</option>
              <option value = "5th Grade">5th Grade</option>
              <option value = "6th Grade">6th Grade</option>
              <option value = "7th Grade">7th Grade</option>
              <option value = "8th Grade">8th Grade</option>
              <option value = "9th Grade">9th Grade</option>
            <option value = "10th Grade">10th Grade</option>
              </select>
            </div>
            <div className="fatherName">
              <label htmlFor="fatherName">Father's name (in full)</label>
              <input
                placeholder="Father's Name"
                type="text"
                name="fatherName"
                value={this.state.fatherName}
                onChange={this.handleChange.bind(this)}
              />
            </div>
            <div className="motherName">
              <label htmlFor="motherName">Mother's name</label>
              <input
                placeholder="Mother's name"
                type="text"
                name="motherName"
                value={this.state.motherName}
                onChange={this.handleChange.bind(this)}
              />
            </div>
            <div className="occupation">
              <label htmlFor="occupation">Occupation</label>
              <input
                placeholder="Occupation"
                type="text"
                name="occupation"
                value={this.state.occupation}
                onChange={this.handleChange.bind(this)}
              />
            </div>
            <div className="permanentAddress">
              <label htmlFor="permanentAddress">Permanent Address</label>
              <input
                placeholder="Permanent Address"
                type="text"
                name="permanentAddress"
                value={this.state.permanentAddress}
                onChange={this.handleChange.bind(this)}
              />
            </div>
            <div className="phone">
              <label htmlFor="phone">Phone Number</label>
              <input
                
                placeholder="Phone Number"
                type="number"
                name="phone"
                value={this.state.phone}
                onChange={this.handleChange.bind(this)}
              />
            </div>
            <div className="whatsAppNumber">
              <label htmlFor="whatsAppNumber">WhatsApp Number</label>
              <input
                placeholder="WhatsApp Number"
                type="number"
                name="whatsAppNumber"
                value={this.state.whatsAppNumber}
                onChange={this.handleChange.bind(this)}
              />
            </div>
            <div className="email">
              <label htmlFor="email">Email Id</label>
              <input
                placeholder="abc@somemail.com"
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange.bind(this)}
              />
            </div>
            <div className="category">
              <label htmlFor="category">Category</label>
              <select style={dropdown_style} name = "dropdown">
              <option value = "SC">SC</option>
              <option value = "ST">ST</option>
              <option value = "OBC">OBC</option>
              <option value = "General" defaultValue>General</option>
              </select>
            </div>
            <div className="transport">
              <label>Transport Requirement</label>
              <fieldset data-role="controlgroup">

              <input
                type="radio"
                name="transport"
                value={this.state.transport}
                onChange={this.handleChange.bind(this)}
              />              
              <label className="radio-label">Yes</label>
              <input
                type="radio"
                name="transport"
                value={this.state.transport}
                onChange={this.handleChange.bind(this)}
              />
               <label className="radio-label">No</label>

              </fieldset>
            </div>
            <div className="declaration">
              <p>Declaration by parent</p>
              <input type="checkbox"
                ></input>
                
                <label>I hereby certify that all information given above is correct</label>
            </div>
            
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
                Register!
              </button>
            </form>
            {this.loadOrShowMessage()}
          </div>
        </div>
      
    );
  }
}
