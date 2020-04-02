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
        return fetch(`users/payment`,{
          method : "POST",
          headers,
          body : JSON.stringify(body)
        })
        .then(response => {
          console.log(response);
          const {status}=response;
          console.log(status);
        
      })
        .catch(err=>console.log(err))

        };
      

    
    return (
      
      <center><div className="container"><StripeCheckout
        stripeKey="pk_test_b2oTj83AKXpEwr5HXpP7HQA600lfXm4Rd2"
        token={makePayment}
        name="Make Payment"
        billingAddress
        shippingAddress
        amount={100}
        /></div></center>

    );
  }
}