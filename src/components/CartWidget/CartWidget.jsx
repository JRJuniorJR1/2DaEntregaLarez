import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import '../../Css/Styles.css'

const CartWidget = () => {
    const { cartQuantity } = useContext(CartContext);
    
    return (
        <div className="cart-widget-container">
            <p>CART</p>
            {cartQuantity() === 0 ? null : <p>{cartQuantity()}</p>}
        </div>
    );
};

export default CartWidget;
