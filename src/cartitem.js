import React from 'react'
import {AiOutlinePlusCircle, AiOutlineMinusCircle} from 'react-icons/ai'
import { useGlobalContext } from './context'
const Cartitem = ({name, price, url, id, amount})=>{
    const {increase, decrease} = useGlobalContext()
    return (<>
        <div className="cart-item">
            <div className="details item">
                <img src={url} alt="" />
                    <p>{name}</p>
            </div>
            <div className="button-container item">
                <button onClick={()=>increase(id)}><AiOutlinePlusCircle/></button>
                    <p>{amount}</p>
                <button onClick={()=> decrease(id)}><AiOutlineMinusCircle/></button>
                </div>
                <div className="price item">
                    <p>{price}$</p>
                </div>
            </div>
        <hr />
    </>
    )
}

export default Cartitem