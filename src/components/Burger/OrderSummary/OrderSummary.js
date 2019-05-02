import React from 'react';

import './OrderSummary.css';

const OrderSummary = props => {
    const ingredients = props.ingredients;
    return (
        <>
            <h3>Your Order: <span>{props.totalPrice.toFixed(2)} €</span></h3>
            <p>A delicious Burger with the following ingredients: </p>
            <ul>
                {Object.keys(ingredients).map((key, i) =>
                    <li key={key + i}>
                        <span style={{textTransform: "capitalize"}}>{key}</span> 
                        : {ingredients[key]}
                    </li>)}
            </ul>
            <div className="ButtonControls">
                <button className="OrderSummaryButton cl"
                        onClick={props.click}>
                    Cancel
                </button>
                <button className="OrderSummaryButton ck">Checkout</button>
            </div>

        </>
    )
}

export default OrderSummary
