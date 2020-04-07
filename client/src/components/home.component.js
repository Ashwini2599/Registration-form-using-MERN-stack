import React, { Component } from 'react';


export default class Home extends Component {

  render() {
    return (
      <div>
      <center>Home Page</center>
      <div>
      <div className="form-group">
          <input type="submit"
          href="/user" 
          value="Registration form" 
          className="btn btn-primary" />
      </div>
            
                    <div className="form-group">
                      <input type="submit"
                      href=""
                         value="Tranfer certificate" 
                         className="btn btn-primary" />
                    </div>
      </div>
      </div>
    )
  }
}
