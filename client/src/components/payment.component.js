import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
require('dotenv').config();
export default class Payment extends Component {

  
  render() {
    
    

      const makePayment = token => {
        const body = {
          token
        }
        const headers ={
          "Content-Type" : "application/json"
        }
        return fetch(`http://localhost:5000/payment`,{
          method : "POST",
          headers,
          body : JSON.stringify(body)
        })
        .then(response => {
          console.log(response)
          response.json().then(data => {
            alert(`We are in business, ${data.email}`);
        })
      })
        .catch(err=>console.log(err))

        };
      

    
    return (
      
      <center><div className="container"><StripeCheckout
        stripeKey={process.env.STRIPE_PUBLIC_KEY}
        token={makePayment}
        name="Make Payment"
        billingAddress
        shippingAddress
        amount={100}
        /></div></center>

    );
  }
}