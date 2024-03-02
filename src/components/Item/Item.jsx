import React from 'react';
import { Link } from 'react-router-dom';
import '../../Css/Styles.css'

const Item = ({producto}) => {
    return (
        <Link to={`/detalle/${producto.id}`} className="item-link">
            <div key={producto.id} className='item-container'>
                <h2>{producto.nombre}</h2>
                <img src={producto.img} alt={producto.nombre} />
            </div>
        </Link>
    );
};

export default Item;