import React from 'react'
import Products from './Productos'

const ItemListContainer = (props) => {
  return (
    <section className='row'>
       <Products titulo="Producto1" descripcion="este es un producto1" comprar="añadir al carrito" />
       <Products titulo="Producto2" descripcion="este es un producto2" comprar="añadir al carrito" />
       <Products titulo="Producto3" descripcion="este es un producto3" comprar="añadir al carrito" />
    </section>
  )
}

export default ItemListContainer