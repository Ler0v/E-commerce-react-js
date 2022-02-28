import React from 'react'
import Productos from './Productos'

const ItemListContainer = (props) => {
  return (
    <section className='row'>
       <Productos titulo="Producto1" descripcion="este es un producto1" precio="99999" />
       <Productos titulo="Producto2" descripcion="este es un producto2" precio="99999" />
       <Productos titulo="Producto3" descripcion="este es un producto3" precio="99999" />
    </section>
  )
}

export default ItemListContainer