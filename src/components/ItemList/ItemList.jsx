import React from 'react';
import Item from '../Item/Item';
import '../../Css/Styles.css'

const ItemList = ({ productos }) => {
    return (
        <div className='itemListContainer'>
            {productos.map((producto) => (
                <div key={producto.id} className='itemContainer'>
                    <Item producto={producto} />
                </div>
            ))}
        </div>
    );
};

export default ItemList;