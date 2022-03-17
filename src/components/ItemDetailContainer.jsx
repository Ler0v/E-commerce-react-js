import React from 'react'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = ({detail}) => {

  return (
    
    <section id='sectionItemDetail' className='contenedor row'>
        {(detail.length!==0)?<ItemDetail detail={detail}/>:""}
    </section>
  )
}

export default ItemDetailContainer