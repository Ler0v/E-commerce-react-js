import React, { useEffect, useState } from 'react'
import Products from './Products'
import res from '../media/res.png'
import ItemList from './ItemList'



// console.log(productos)

// const getProducts = new Promise ((resolve, reject) => {
//   let condition = true
//   if (condition){
//     setTimeout(() => {
//       resolve(productos)
//     }, 4000)
//   }
//   else{
//     reject ('Error, no hay productos')
//   }
// })


const ItemListContainer = (props) => {
  return (
    <div>
      <h2></h2>
    <section className='row'>
       <ItemList />
    </section>
    
    </div>
  )
}

export default ItemListContainer

