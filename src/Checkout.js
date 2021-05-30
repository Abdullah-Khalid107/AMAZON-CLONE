import React from 'react'
import './Checkout.css';
import {useStateValue} from './StateProvider';
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal';
import CurrencyFormat from "react-currency-format";

function Checkout() {
    const[{basket}]=useStateValue();
    return (

        <div className='checkout'>
            <div className='checkout__left'>

            <img className="checkout__ad"
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
            alt=""
            />
            {/* /////TERNARY OPERATERRS USING  CONDITONS TO RENDER*/}

       {basket?.length===0 ?(
           <div>
               <h2>Your Shopping Basket Is Empty</h2>
               <p> you have no items in your basket.go and click add to bske button to get </p>
           </div>
       ):(
           <div>
               <h2 className="checkout__title">Your Shopping Basket </h2>

               {/* LIST OUT ALL OF THE CHECKOUT PRODUCTS */}

               {basket.map(item=>(
               <CheckoutProduct
               id={item.id}
               title={item.title}
               image={item.image}
               price={item.price}
               rating={item.rating}
               />
               ))}
           </div>
       ) }
       </div>
       {basket.length>0 && (
           <div className="checkout__right">
               
               <Subtotal/>
               </div>
       )}
        </div>
    )
}

export default Checkout
