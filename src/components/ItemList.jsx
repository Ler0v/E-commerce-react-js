import React, {useEffect, useState} from 'react'
import Products from './Products'




class Item {
    constructor(id, nombre, precio, descripcion, img) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.descripcion = descripcion;
        this.img = img;
    }
}

const ItemList = () => {
    const [listaItem, setListaItem] = useState([])
    const [loading, setLoading] = useState(true);
    const items = [
     new Item ( 1, "Producto1", 5000, "esta es una descripcion", '/static/media/res.18194c66cf57d2784c1b.png'),
     new Item ( 2, "Producto1", 5000, "esta es una descripcion", '/static/media/res.18194c66cf57d2784c1b.png'),
     new Item ( 3, "Producto1", 5000, "esta es una descripcion", '/static/media/res.18194c66cf57d2784c1b.png'),
     new Item ( 4, "Producto1", 5000, "esta es una descripcion", '/static/media/res.18194c66cf57d2784c1b.png'),
     new Item ( 5, "Producto1", 5000, "esta es una descripcion", '/static/media/res.18194c66cf57d2784c1b.png'),
     new Item ( 6, "Producto1", 5000, "esta es una descripcion", '/static/media/res.18194c66cf57d2784c1b.png')
    ]


    const getItem = new Promise((resolve, reject) => {
        const condicion = true;  
        if (condicion){
            setTimeout(() => {
                resolve(items)
            },3000)
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
            return <Products key = {item.id} imagen = {item.imagen} titulo = {item.titulo} descripcion = {item.descripcion}/>
        })}
    </>
  )
}

export default ItemList