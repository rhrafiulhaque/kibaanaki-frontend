import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cart: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCart: (state, action) => {
            const productIndex = state.cart.findIndex((product) => product.product_name === action.payload.product_name)
            if (productIndex !== -1) {
                state.cart[productIndex].quantity += action.payload.quantity;
            } else {
                state.cart.push(action.payload);
            }
        },
        removeCart: (state, action) => {
            const products = state.cart.filter((product) => product.product_name !== action.payload)
            state.cart = products
        },


        increaseQuantity: (state, action) => {
            const productIndex = state.cart.findIndex((product) => product.product_name === action.payload)
            if (productIndex !== -1) {
                state.cart[productIndex].quantity = state.cart[productIndex].quantity + 1;
            }
        },
        decreaseQuantity: (state, action) => {
            console.log(action.payload)
            const productIndex = state.cart.findIndex((product) => product.product_name === action.payload)
            if (productIndex !== -1) {
                state.cart[productIndex].quantity = state.cart[productIndex].quantity - 1;
            }
        }
    },
})

// Action creators are generated for each case reducer function
export const { addCart, increaseQuantity, decreaseQuantity, removeCart } = cartSlice.actions

export default cartSlice.reducer