import { doc,getDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import {db} from "../../utils/firebase"
import ItemDetail from './ItemDetail'
import Skeleton from 'react-loading-skeleton'



const ItemDetailContainer = () => {

  const [item, setItem]= useState(null);
  const [loading, setLoading]=useState(true)
  const {id} = useParams();


  useEffect(()=>{

    const itemRef = doc(db,'items',id)

    getDoc(itemRef)
    .then((res)=>{
      setItem({
        id: res.id,
        ...res.data()})
      })
  },[])


  return (

    <section id='sectionItemDetail' className='contenedor row'>
      {item && <ItemDetail item={item}/>}
    </section>
  )
}

export default ItemDetailContainer