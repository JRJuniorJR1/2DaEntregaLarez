import React, { useContext } from 'react';
import '../../Css/Styles.css';
import { CartContext } from '../../context/CartContext';

const CartItem = ({ product, removeItem }) => {
    const { decreaseQuantity, increaseQuantity } = useContext(CartContext);

    const handleRemoveItem = () => {
        removeItem(product.producto.id);
    };

    const handleDecreaseQuantity = () => {
        decreaseQuantity(product.producto.id);
    };

    const handleIncreaseQuantity = () => {
        increaseQuantity(product.producto.id);
    };    

    return (
            <div className="cart-item-container">
                <h3 className="product-name">{product.producto.nombre}</h3>
                <div className="product-image-container">
                    <img src={product.producto.img} alt={product.producto.nombre} />
                </div>
                <div className="quantity-container">
                    <button className='counter-button-menos' onClick={handleDecreaseQuantity}>-</button>
                    <p>Cantidad: {product.cantidad}</p>
                    <button className='counter-button-mas' onClick={handleIncreaseQuantity}>+</button>
                </div>
                <p>Costo: ${product.producto.precio * product.cantidad}</p>
                <button className='counter-button-delete-cart' onClick={handleRemoveItem}>Eliminar producto</button>
            </div>
    );
};

export default CartItem;