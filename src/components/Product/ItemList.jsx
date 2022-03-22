import React from 'react';
import Products from './Products.jsx';


const ItemList = ({items}) => {

  return(
    <>
    {items.map(items => <Products key={items.id} item={items}/>
    )}
    </>
)}

export default ItemList

