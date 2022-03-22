import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail'


const ItemDetailContainer = () => {

  const [item, setItem]= useState();

  const {id} = useParams();

  useEffect(() => {
      fetch('https://6231d93259070d92733c73a8.mockapi.io/Producto')
      .then((respuesta) => respuesta.json())
      .then((data) => setItem(data.find((op)=>op.id === id)))
      .catch((error) => console.log(error))
  },[])



  return (

    <section id='sectionItemDetail' className='contenedor row'>
      <ItemDetail item={item}/>
    </section>
  )
}

export default ItemDetailContainer