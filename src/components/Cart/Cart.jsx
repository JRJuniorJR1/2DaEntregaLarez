import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import CartItem from '../CartItem/CartItem';
import '../../Css/Styles.css';

const Cart = () => {
    const { cart, vaciarCarrito, eliminarItem, totalCarrito } = useContext(CartContext);

    return (
        <div className="cart-container">
            {cart.length === 0 ? (
                <>                    
                    <div className="center-button">
                        <h1 className='title-cart-vacio'>NO HAY PRODUCTOS EN EL CARRITO :( </h1>
                        <button className="home-cart"><Link to={"/"} className="home-cart">Inicio</Link></button>
                    </div>
                </>
            ) : (
                <>
                    <h1 className='title-cart'>CARRITO DE COMPRAS</h1>
                    {cart.map((product) => (
                        <CartItem key={product.producto.id} product={product} removeItem={eliminarItem} />
                    ))}
                    <h4 className="total">Total: ${totalCarrito()}</h4>
                    <div className="button-container">
                        <button className="empty-cart-button" onClick={vaciarCarrito}>Vaciar carrito</button>
                        <button className="empty-cart-button"><Link to={"/checkout"} className="empty-cart-button">Completar compra</Link></button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Cart;
