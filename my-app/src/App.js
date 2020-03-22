import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar.component"
import CreateUser from "./components/create-user.component";
import EditUser from "./components/edit-user.component";
import Payment from "./components/payment.component";
import Home from "./components/home.component";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br/>
        <Route path="/" exact component={Home}/>
        <Route path="/user" exact component={CreateUser} />
        <Route path="/payment" exact component={Payment}/>
        <Route path="/edit/:id" component={EditUser} />
      </div>
    </Router>
  );
}

export default App;