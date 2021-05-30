import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from "react-currency-format";
import {useStateValue} from './StateProvider';
import { getBasketTotal } from './reducer';


function Subtotal() {
    const [{basket},dispatch]=useStateValue();
    return (
        <div className="subtotal">
            {/* PRICE */}

            <CurrencyFormat
            renderText={(value)=>(
              <>
              <p>
                  subtotal({basket.length} items):<strong>{`${value}`}</strong>
              </p>
              <small className="subtotal__gift">
                  <input type="checkbox"/>this order contains a gift item
              </small>
              </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thouandSeparated={true}
            prefix={"$"}
            />
            <button>Procceed to checkout</button>
        </div>
    )
}

export default Subtotal
