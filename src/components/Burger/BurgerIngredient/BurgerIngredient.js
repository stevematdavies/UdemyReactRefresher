import React from 'react';
import PropTypes from 'prop-types';

import './BurgerIngredient.css';

const BurgerIngredient = props => {
    const renderIngredient = ingredientType => {
        switch(props.type) {
            case 'bread-bottom': return (<div className="BreadBottom"></div>);
            case 'bread-top': return  (<div className="BreadTop">
                                            <div className="Seeds1"></div>
                                            <div className="Seeds2"></div>
                                      </div>);
            case 'meat': return (<div className="Meat"></div>);
            case 'cheese':return (<div className="Cheese"></div>)
            case 'salad': return (<div className="Salad"></div>)
            case 'bacon': return (<div className="Bacon"></div>)
            default: return null;
        }
    }
    return renderIngredient(props.type);
}

BurgerIngredient.propTypes = { type: PropTypes.string.isRequired }

export default BurgerIngredient

