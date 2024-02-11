import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({producto}) => {
  return (
    <div>
      <h1>{producto.nombre}</h1>
      <img src={producto.img} alt={producto.nombre}/>
      <h3>Precio: {producto.precio} Pesos</h3>
      <h3>Disponible: {producto.stock} unidades</h3>
      <p><b>Descripcion del producto:</b> {producto.description}</p>
      <ItemCount initial={1} stock={producto.stock}/>
    </div>
  )
}

export default ItemDetail