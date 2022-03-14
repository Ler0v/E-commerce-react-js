import React, {useEffect, useState} from 'react'
import Products from './Products'


class Product {
    constructor(id, nombre, precio, descripcion, img) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.descripcion = descripcion;
        this.img = img;
    }
}

const ItemList = () => {

    const productos = [
      {titulo:"Producto1", descripcion:"este es el producto 1", comprar:"añadir al carrito",},
      {titulo:"Producto1", descripcion:"este es el producto 1", comprar:"añadir al carrito",},
      {titulo:"Producto1", descripcion:"este es el producto 1", comprar:"añadir al carrito",},
      {titulo:"Producto1", descripcion:"este es el producto 1", comprar:"añadir al carrito",},
      {titulo:"Producto1", descripcion:"este es el producto 1", comprar:"añadir al carrito",},
      {titulo:"Producto1", descripcion:"este es el producto 1", comprar:"añadir al carrito",}
    ]



    const [listaItem, setListaItem] = useState([])
    const getItem = new Promise((reject, resolve) => {
        const condicion = false
        if (condicion){
            setTimeout(() => {
                resolve(productos)
            },3000)
        }
        else{
            reject('Hay problemas, no llega la lista')
        }
        
    })

    useEffect (() => {
        getItem
        .then((respuesta) => setListaItem(respuesta))
        .catch( (error) => console.log(error) )
    },[]) 

  return (

    <>
        {listaItem.map((producto) => {
            <Product key = {producto.id} name = {producto.nombre} img = {producto.img}/>
        })}
    </>
  )
}

export default ItemList