import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from "react-redux";

import CheckoutSummary from '../../components/Order/Checkoutsummary';
import ContactData from '../../containers/Checkout/ContactData/ContactData';
import * as actions from '../../store/actions/index';

class Checkout extends Component {

checkOutCancelledHandler = () =>{
    this.props.history.goBack();
}

checkOutContinuedHandler = () =>{
    this.props.history.replace('/checkout/contact-data');
}
  
    render() { 
        let summary = <Redirect to="/" />;
        if(this.props.ings){
            const purchasedRedirect= this.props.purchased ? <Redirect to="/" /> : null;
            summary=(
                 <div>
                {purchasedRedirect}
                <CheckoutSummary   
                ingredients={this.props.ings}
                checkOutCancelled={this.checkOutCancelledHandler}
                checkOutContinued={this.checkOutContinuedHandler} />
                <Route path={this.props.match.path + '/contact-data'} 
                
                component={ContactData}
           />
            </div>
            )
        }
        return summary;
    }
}


const mapStateToProps=state=>{
    return{
      ings: state.burgerBuilder.ingredients,
      price: state.burgerBuilder.totalPrice,
      purchased: state.order.purchased
    }
  }
 

  
export default connect(mapStateToProps)(Checkout);