import React from 'react'
import "./Checkoutproduct.css";
import {useStateValue} from './StateProvider';

function CheckoutProduct({id,title,image,price,rating}) {
    const [{basket},dispatch]=useStateValue();

    const removeFromBasket=()=>{
//   REMOVING ITEM FROM BASKET
dispatch({
    type:"REMOVE_FROM_BASKET",
    id:id,
});
    }

    return (
        <div className="checkoutproduct">
           <img className="checkoutproduct__image" src={image} alt="/"/>

{/* AS IMAGE ON LEFT SIDE ON BAKSET PAGE AND ALL OTHER INFO IS ON THE RIGHT HAND SIDE */}
           <div className="checkoutproduct__info">
              <p className="checkoutproduct__title">
                  {title}</p>

                 {/* PRICE OF THE ITEM WHIC ADD TO BASKET */}

              <p className="checkoutproduct__price">
                <small>$</small>
                <strong>{price}</strong>
            </p>

            {/* RATINGS OF THE PRODUCTS THAT ARE ALREDAY  */}
            <div className="checkoutproduct__rating">
                {Array(rating)
                .fill()
                .map((_,i)=>(
                <p>⭐</p>
                ))}
            </div>

            <button onClick={removeFromBasket} >Remove From Basket</button>
           </div>
        </div>
    )
}

export default CheckoutProduct;
