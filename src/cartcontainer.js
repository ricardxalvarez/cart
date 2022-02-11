import React from 'react'

import {BsBagCheck} from 'react-icons/bs'
import Cartitem from './cartitem'
import { useGlobalContext } from './context'

const Cartcontainer = ()=>{
    const { cart, subtotal, clearCart, delivery } = useGlobalContext()
    if (cart.length === 0){
        return <section className='cart'>
            <div className="cart-center">
                <h1>My Cart</h1>
                <div className="frame">
                    <div className="information">
                        <ul>
                        <li>
                            Description
                        </li>
                        <li>
                            Quantity
                        </li>
                        <li>
                            Price
                        </li>
                        </ul>
                    </div>
                    <hr />
                    <div className="error-container">
                        <div className="error-center">
                            <h1>Looks like your cart is empty :(</h1>
                            <h2>Let's fill it!</h2>
                            <a href="/">Back to the shop</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    }
    return <section className='cart'>
        <div className="cart-center">
            <h1>My Cart</h1>
            <div className="frame">
                <div className="information">
                    <ul>
                        <li>
                            Description
                        </li>
                        <li>
                            Quantity
                        </li>
                        <li>
                            Price
                        </li>
                    </ul>
                </div>
                <hr />
                <div className="item-container">
                    {/* map here */}
                    {
                       cart.map((item, index)=>{
                           return <Cartitem {...item} key={index}/>
                       })
                    }
                    {/* to here */}
                    <div className="total-container">
                        <p>shipping : {delivery}$</p>
                        <p>subtotal : {subtotal}$</p>
                        <p>total : {delivery + subtotal}$</p>
                    </div>
                    <hr />
                    <div className="payment-container">
                        <button>Checkout <BsBagCheck/></button>
                    </div>
        <button className='clear-cart' onClick={clearCart}>clear cart</button>
                </div>
            </div>
        </div>
    </section>
}
export default Cartcontainer