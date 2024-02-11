import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const ItemCount = ({ initial, stock }) => {

    const [contador, setContador] = useState(1);

    const showToastMessage = () => {
        toast.success(`Agregaste ${contador} artículos al carrito.`, {

        });
    };

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
        showToastMessage();
    };

    return (
        <div>
            <button onClick={decrementar}>-</button>
            <p>{contador}</p>
            <button onClick={incrementar}>+</button>
            <button onClick={agregarCarrito}>Agregar al carrito</button>
            <ToastContainer />
        </div>
    );
};

export default ItemCount;
