import React from 'react'
import Item from '../Item/Item'

const ItemList = ({productos}) => {
  return (
    <div className='itemListContainer'>
        {
          productos.map((producto)=>{
            return(
                <Item key={producto.id} producto={producto}/>
              )
          })
        }
    </div>
  )
}

export default ItemList