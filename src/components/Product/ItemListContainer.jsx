import { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'
import {collection, getDocs, query, where,} from 'firebase/firestore'
import {db} from "../../utils/firebase"

const ItemListContainer = () => {

const [items,setItems] = useState([])
const {categoriaId} = useParams()

useEffect(() => {

  const itemRef = collection(db, 'items')
  
  const itemShow = !categoriaId? itemRef : query(itemRef, where('categoria', '==', categoriaId))
    getDocs(itemShow)
    .then( response  => {
      setItems(response.docs.map(doc => {return {id: doc.id, ... doc.data()}}))
    })
  
},[categoriaId])

return (
  <section id='sectionItemList' className='contenedor row'>
    <ItemList items ={items}/>
  </section>
)
}

export default ItemListContainer

 