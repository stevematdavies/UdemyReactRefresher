import React, { useState  } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import { PRICES, BASE_PRICE } from '../../utils/constants';

const BurgerBuilder = () => {

  const [burgerBuilderState, setBurgerBuilderState] = useState({
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4,
  });

  const checkBasePriceOnOperation = (count ,amt) =>
      count > 0 && burgerBuilderState.totalPrice - amt >= BASE_PRICE;

  const addIngredient = type => {
    let {ingredients, totalPrice} = burgerBuilderState;
    ingredients[type] ++;
    totalPrice += PRICES[type];
    setBurgerBuilderState({ ingredients, totalPrice});
  }

  const removeIngredient = type => {
    let {ingredients, totalPrice} = burgerBuilderState;
    if (checkBasePriceOnOperation(ingredients[type], PRICES[type])) {
      ingredients[type] --;
      totalPrice -= PRICES[type];
      setBurgerBuilderState({ ingredients, totalPrice});
    }
  }

  return (
    <>
        <Burger ingredients ={ burgerBuilderState.ingredients} />
        <BuildControls
          runningCost={burgerBuilderState.totalPrice}
          addIngredientHandler={addIngredient}
          removeIngredientHandler={removeIngredient}/>
    </>
  );
}

export default BurgerBuilder
