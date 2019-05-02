import React, { useState  } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import { PRICES, BASE_PRICE } from '../../utils/constants';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const BurgerBuilder = () => {

  const [burgerBuilderState, setBurgerBuilderState] = useState({
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4,
    showOrderSummary: false
  });

  const showOrderSummaryHandler = () => {
    console.log('here');
    setBurgerBuilderState({
      ...burgerBuilderState,
      showOrderSummary:true
    });
  }

  const checkBasePriceOnOperation = (count ,amt) =>
      count > 0 && burgerBuilderState.totalPrice - amt >= BASE_PRICE;

  const addIngredient = type => {
    let {ingredients, totalPrice} = burgerBuilderState;
    ingredients[type] ++;
    totalPrice += PRICES[type];
    setBurgerBuilderState({ 
      ...burgerBuilderState, 
      ingredients, 
      totalPrice
    });
  }

  const removeIngredient = type => {
    let {ingredients, totalPrice} = burgerBuilderState;
    if (checkBasePriceOnOperation(ingredients[type], PRICES[type])) {
      ingredients[type] --;
      totalPrice -= PRICES[type];
      setBurgerBuilderState({ 
        ...burgerBuilderState, 
        ingredients, 
        totalPrice
      });
    }
  }

  const closeModalHandler = () => 
  setBurgerBuilderState({ 
    ...burgerBuilderState, 
    showOrderSummary:false
  });

  return (
    <>
        <Modal show={burgerBuilderState.showOrderSummary } 
               closeModalHandler={closeModalHandler}>
                  <OrderSummary {...burgerBuilderState} click={closeModalHandler}/>
        </Modal>
        <Burger ingredients ={ burgerBuilderState.ingredients} />
        <BuildControls
          order={showOrderSummaryHandler}
          runningCost={burgerBuilderState.totalPrice}
          addIngredientHandler={addIngredient}
          removeIngredientHandler={removeIngredient}/>
    </>
  );
}

export default BurgerBuilder
