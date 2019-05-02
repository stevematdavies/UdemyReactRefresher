import React from 'react';
import { BUILD_CONTROLS,BASE_PRICE } from '../../../utils/constants';
import BuildControl from './BuildControl/BuildControl';

import './BuildControls.css';

const BuildControls = props => {
  const isDisabled = props.runningCost <= BASE_PRICE;
  return (
    <div className="BuildControls">
        <p className="Price">
            <span>Current Price: </span>
            <strong>{props.runningCost.toFixed(2)} €</strong>
        </p>
        {BUILD_CONTROLS.map((ctrl,i) =>
            <BuildControl
                key={i}
                controlDisabled={isDisabled}
                label={ctrl.label}
                add={() => props.addIngredientHandler(ctrl.type)}
                remove={() => props.removeIngredientHandler(ctrl.type)}/>)}
      <button className="OrderButton" 
              disabled={isDisabled} onClick={props.order}>ORDER NOW</button>
    </div>
  )
}

export default BuildControls
