import React, { useContext } from 'react'
import { CartContext } from '../Context/CartContext'
import CartItem from './CartItem';
import { addDoc, collection, Timestamp } from 'firebase/firestore';
import { db } from '../../utils/firebase';


const Cart = () => {

    const carritoContext = useContext(CartContext);
    const productosCarrito = carritoContext.productosCarrito
    console.log('Productos Carrito', carritoContext.productosCarrito)
    
    
    const enviarOrden = async(e) => {
        e.preventDefault()
        
        const nombre = e.target[0].value
        const apellido = e.target[1].value
        const mail = e.target[2].value
        const telefono = e.target[3].value


        const newObject = {
            buyer: {
                nombre,
                apellido,
                mail,
                telefono
            },
             items: productosCarrito,
             total: carritoContext.totalQty(),
             date: Timestamp.fromDate(new Date())
        }
        
        ordersCollection = collection(db, 'orders')
        const docReference = await addDoc(ordersCollection, newObject)
        console.log('referencia', docReference)
    }



  return (
      <div>
           <table className="table">
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">Producto</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Precio</th>
                        <th scope="col">SubTotal</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        productosCarrito.map(producto => (
                            <CartItem key={producto.item.id} productoCarrito={producto}/>
                        ))
                    }
                </tbody>
            </table>
           <div>
                <button onClick={carritoContext.clear}>Vaciar Carrito</button>
           </div>
           <div>
               <form className='formulario' onSubmit={enviarOrden}>
                   <input type="text" placeholder='Nombre' />
                   <input type="text" placeholder='apellido' />
                   <input type="text" placeholder='Correo electronico' />
                   <input type="text" placeholder='Numero de telefono' />
                   <button>Enviar orden</button>
               </form>
           </div>
      </div>
       
  )
}

export default Cart