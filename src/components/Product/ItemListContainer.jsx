import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'

const ItemListContainer = () => {

const [items,setItems] = useState([])
const {categoriaId} = useParams()

useEffect(()=>{
  fetch('https://6231d93259070d92733c73a8.mockapi.io/Producto')
  .then(response => response.json())
  .then(data => {!categoriaId? setItems(data): setItems(data.filter(prod=>prod.categoria === categoriaId))})
  .catch((error)=>console.log(error))
},[categoriaId])

return (
  <section id='sectionItemList' className='contenedor row'>
    <ItemList items ={items}/>
  </section>
)
}

export default ItemListContainer

