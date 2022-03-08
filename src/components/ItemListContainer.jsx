import React from 'react'
import Products from './Products'
import res from '../media/res.png'



const ItemListContainer = (props) => {
  return (
    <section className='row'>
       <Products imagen = {res} titulo="Producto1" descripcion="este es el producto 1" comprar="añadir al carrito" />
       <Products  imagen = {res} titulo="Producto2" descripcion="este es un producto2" comprar="añadir al carrito" />
       <Products imagen = {res} titulo="Producto3" descripcion="este es un producto3" comprar="añadir al carrito" />
    </section>
  )
}

export default ItemListContainer