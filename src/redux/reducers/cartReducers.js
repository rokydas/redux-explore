const { ADD_TO_CART, REMOVE_FROM_CART } = require("../actions/cartActions");

const initialState = {
    cart: []
}

const cartReducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const newCart = [...state.cart, action.id]
            return {cart: newCart};

        case REMOVE_FROM_CART:
            const remainingCart = state.cart.filter(pdId => pdId !== action.id)
            return {cart: remainingCart};

        default:
            return state;
    }
}

export default cartReducers;