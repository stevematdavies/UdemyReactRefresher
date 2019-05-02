import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

import './Burger.css';

const Burger = props => {

 const renderIngredients = ingredients => {
    const elementPredicate = k => (_,i) =>  <BurgerIngredient key={k + i} type={k} />
    const predicate = k => [...Array(ingredients[k])].map(elementPredicate(k));
    const reducer = (arr,el) => arr.concat(el);
    const element =  Object.keys(ingredients).map(predicate).reduce(reducer);
    return element.length > 0 ? element : <p>Please start Adding ingredients!</p>
  }

  return (
    <div className="Burger">
       <BurgerIngredient type="bread-top" />
        {renderIngredients(props.ingredients)}
       <BurgerIngredient type="bread-bottom" />
    </div>
  )
}

export default Burger
