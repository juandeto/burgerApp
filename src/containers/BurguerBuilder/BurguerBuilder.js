import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from '../../store/actions/index';

import axios from '../../axios-orders';
import Auxiliary from "../../hoc/Auxiliary";
import Burguer from "../../components/Burguer/Burguers/Burguer";
import BuildControls from "../../components/Burguer/BuiltControls/BuildControls";
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burguer/orderSummary/orderSummary';
import BurguerMessage from "../../components/Burguer/BurguerMessage/BurguerMessage";
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Spinner from '../../components/UI/Spinner/Spinner';



class BurguerBuilder extends Component {
  state = {
    purchasing: false,
  
  };

  componentWillMount(){
    this.props.onInitIngredients()
  }

  updatePurchaseState(ingredients){

    const sum=Object.keys(ingredients)
        .map(igKey =>{
            return ingredients[igKey]
        })
        .reduce((sum, el)=>{
            return sum+el;
        },0);
      return sum > 0 ;
  }

  purchaseHandler=()=>{
    this.setState({purchasing: true})
  }

  purchaseCancelHandler = () => {
    this.setState({purchasing: false})
  }

  purchaseContinueHandler=()=>{
    this.props.onPurchaseInit();
    this.props.history.push('/checkout')
  }



  render() {
      const disableInfo={
          ...this.props.ings
      };
      for(let key in disableInfo){
          disableInfo[key] = disableInfo[key] <= 0;
      }
      let orderSummary= null;

      let burger=this.props.error ? <p>Ingredients can't be loaded!</p>: <Spinner />;

      if(this.props.ings){
        burger= (
        <Auxiliary>
          <Burguer ingredients={this.props.ings} />
      <BurguerMessage ingredients={this.props.ings}/>
      <BuildControls 
      ingredientAdded={this.props.onIngredientAdded}
      ingredientRemoved={this.props.onIngredientRemoved}
      disabled={disableInfo}
      purchasable={this.updatePurchaseState(this.props.ings)}
      ordered={this.purchaseHandler}
      price={this.props.price}
      />
        </Auxiliary>
      );
orderSummary= <OrderSummary 
      ingredients={this.props.ings}
      purchaseCanceled={this.purchaseCancelHandler}
      purchaseContinued={this.purchaseContinueHandler}
      price={this.props.price}/>;
      }

      
    return (
      <Auxiliary>
          <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
            {orderSummary}
            </Modal>
        {burger}
      </Auxiliary>
    );
  }
}

const mapStateToProps=state=>{
  return{
    ings: state.burgerBuilder.ingredients,
    price: state.burgerBuilder.totalPrice,
    error: state.burgerBuilder.error
  }
}

const mapDispatchToProps=dispatch=>{
  return{
    onIngredientAdded: (ingName)=>dispatch(actions.addIngredient(ingName)),
    onIngredientRemoved: (ingName)=>dispatch(actions.removeIngredient(ingName)),
    onInitIngredients: ()=>dispatch(actions.initIngredients()),
    onPurchaseInit: ()=>dispatch(actions.purchaseInit())
  }
}




export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurguerBuilder, axios));
