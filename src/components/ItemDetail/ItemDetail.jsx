import React, { useState, useContext } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import '../../Css/Styles.css';

const ItemDetail = ({ producto }) => {
    const [cart, setCart] = useState(false);
    const { agregarCarrito } = useContext(CartContext);

    const formattedPrice = producto && producto.precio 
        ? producto.precio.toLocaleString('es-ES', { style: 'currency', currency: 'CLP', useGrouping: true })
        : '';
    const onAdd = (count) => {
        setCart(true);
        agregarCarrito(producto, count);
    };

    return (
        <div className="item-detail-container">
            <h1>{producto.nombre}</h1>
            {producto.stock === 0 ? (
                <div className="sin-stock-overlay">
                    <img className="item-detail-image" src={producto.img} alt={producto.nombre} />
                    <p className="sin-stock-label">Sin stock</p>
                </div>
            ) : (
                <img className="item-detail-image" src={producto.img} alt={producto.nombre} />
            )}
            <h3>Precio: {formattedPrice}</h3>
            <h3>Stock: {producto.stock}</h3>
            <p>Descripcion: {producto.description}</p>

            {producto.stock === 0 ? (
                <h2 className='product-sin-stock'>Producto sin stock</h2>
            ) : cart ? (
                <Link to={'/cart'} className="go-to-cart-link">Ir al carrito</Link>
            ) : (
                <ItemCount initial={1} stock={producto.stock} onAdd={onAdd} />
            )}
        </div>
    );
};

export default ItemDetail;