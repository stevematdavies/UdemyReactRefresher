import React from 'react';
import { BUILD_CONTROLS } from '../../../utils/constants';
import BuildControl from './BuildControl/BuildControl';

import './BuildControls.css';

const BuildControls = props => {
  return (
    <div className="BuildControls">
        <p className="Price">
            <span>Current Price: </span>
            <strong>{props.runningCost.toFixed(2)} €</strong>
        </p>
        {BUILD_CONTROLS.map((ctrl,i) =>
            <BuildControl
                key={i}
                label={ctrl.label}
                add={() => props.addIngredientHandler(ctrl.type)}
                remove={() => props.removeIngredientHandler(ctrl.type)}/>)}
    </div>
  )
}

export default BuildControls
