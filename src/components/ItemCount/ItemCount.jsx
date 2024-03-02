import React, { useState } from 'react';
import '../../Css/Styles.css'

const ItemCount = ({ initial, stock, onAdd }) => {
    const [contador, setContador] = useState(initial);

    const decrementar = () => {
        if (contador > initial) {
            setContador(contador - 1);
        }
    };

    const incrementar = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    };

    const agregarCarrito = () => {
        onAdd(contador);
    };

    return (
        <div className="item-count-container">
            <div className="counter-buttons">
                <button className="counter-button" onClick={decrementar}>-</button>
                <h4>{contador}</h4>
                <button className="counter-button" onClick={incrementar}>+</button>
            </div>
            <button className="add-to-cart-button" onClick={agregarCarrito}>Agregar al carrito</button>
        </div>
    );
};

export default ItemCount;
