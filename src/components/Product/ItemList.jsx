import React, {useEffect, useState} from 'react'
import Products from './Products'

const ItemList = () => {
    const [listaItem, setListaItem] = useState([])
    const [loading, setLoading] = useState(true);
    const items = [
     {id: 1, titulo: "Producto1", precio: 5000, descripcion:"esta es una descripcion", imagen:'https://i.postimg.cc/43KVSgVW/res.png'},
     {id: 2, titulo: "Producto2", precio: 5000, descripcion:"esta es una descripcion", imagen:'https://i.postimg.cc/43KVSgVW/res.png'},
     {id: 3, titulo: "Producto3", precio: 5000, descripcion:"esta es una descripcion", imagen:'https://i.postimg.cc/43KVSgVW/res.png'},
     {id: 4, titulo: "Producto4", precio: 5000, descripcion:"esta es una descripcion", imagen:'https://i.postimg.cc/43KVSgVW/res.png'},
     {id: 5, titulo: "Producto5", precio: 5000, descripcion:"esta es una descripcion", imagen:'https://i.postimg.cc/43KVSgVW/res.png'},
     {id: 6, titulo: "Producto6", precio: 5000, descripcion:"esta es una descripcion", imagen:'https://i.postimg.cc/43KVSgVW/res.png'}
    ]

    const getItem = new Promise((resolve, reject) => {
        const condicion = true;  
        if (condicion){
            setTimeout(() => {
                resolve(items)
            },1000)
        }
        else{
            reject('Hay problemas, no llega la lista')
        }
        
    })

    useEffect (() => {
        getItem
        .then((respuesta) => setListaItem(respuesta))
        .catch( (error) => console.log(error))
        .finally(()=>setLoading(false));
    },[]) 



  return (
    <>
        {loading ? <p >Cargando...</p> :listaItem.map((item) => {
            return <Products key = {item.id} imagen = {item.imagen} titulo = {item.titulo} descripcion = {item.descripcion} precio = {item.precio}/>
        })}
    </>
  )
}

export default ItemList