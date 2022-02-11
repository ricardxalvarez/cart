

const reducer = (state, action)=>{
    if (action.type === 'CLEAR_CART'){
        return {...state, cart:[]}
    }
    if (action.type === "INCREASE"){
        let tempCart = state.cart.map((item)=>{
                if (item.id === action.payload){
                    return {...item, amount: item.amount + 1}
                }
                return item
            })
        return {...state, cart: tempCart}
    }
    if (action.type === 'DECREASE'){
        let tempCart = state.cart.map((item)=>{
                if (item.id === action.payload){
                    return {...item, amount: item.amount - 1}
                }
                return item
            }).filter((item)=> item.amount !== 0)
        return {...state, cart: tempCart}
    }
    if (action.type === 'GET_SUBTOTAL'){
        let {subtotal, amount} = state.cart.reduce((cartsubtotal,cartItem)=>{
            const {price, amount} = cartItem
            const itemsubtotal = price * amount
            cartsubtotal.subtotal += itemsubtotal
            cartsubtotal.amount += amount
            return cartsubtotal
        },{
            subtotal:0,
            amount:0
        })
        subtotal = parseFloat(subtotal.toFixed(2))
        return {...state, subtotal, amount}
    }
    if (action.type === "GET_SHIPPING"){
       let {delivery, amount} = state.cart.reduce((cartdelivery,cartItem)=>{
            const {shipping, amount} = cartItem
            const itemdelivery = shipping * amount
            cartdelivery.delivery += itemdelivery
            cartdelivery.amount += amount
            return cartdelivery
        },{
            delivery:0,
            amount:0
        }) 
        return {...state, delivery, amount}
    }
}

export default reducer