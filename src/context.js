import React, {useContext, useEffect, useReducer, useState} from 'react'
import phones from './data'
import reducer from './reducer'

const AppContext = React.createContext()

const initialState = {
    cart: phones,
    subtotal:0,
    amount:0,
    delivery: 10
}

const AppProvider = ({children})=>{
    const [state, dispatch] = useReducer(reducer, initialState)
    const clearCart = ()=>{
        dispatch({type: 'CLEAR_CART'})
    }
    const increase = (id)=>{
        dispatch({type: 'INCREASE', payload: id})
    }
    const decrease = (id)=>{
        dispatch({type: 'DECREASE', payload: id})
    }
    useEffect(()=>{
        dispatch({type: 'GET_SUBTOTAL'})
        dispatch({type: 'GET_SHIPPING'})
    },[state.cart])
     return (
     <AppContext.Provider value={{
        ...state,
        increase,
        decrease,
        clearCart
    }}>{children}</AppContext.Provider>)
}

const useGlobalContext = ()=>{
    return useContext(AppContext)
}

export { AppProvider, useGlobalContext}