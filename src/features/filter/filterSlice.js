import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    searchKeyword: ''
}

export const filterSlice = createSlice({
    name: 'searchKeyword',
    initialState,
    reducers: {
        setKeyword: (state, action) => {
            state.searchKeyword = action.payload
        },

        resetKeyword: (state, action) => {
            state.searchKeyword = ''
        },


        // removeCart: (state, action) => {
        //     const products = state.cart.filter((product) => product.productName !== action.payload)
        //     state.cart = products
        // },


        // increaseQuantity: (state, action) => {
        //     const productIndex = state.cart.findIndex((product) => product.productName === action.payload)
        //     if (productIndex !== -1) {
        //         state.cart[productIndex].quantity = state.cart[productIndex].quantity + 1;
        //     }
        // },
        // decreaseQuantity: (state, action) => {
        //     console.log(action.payload)
        //     const productIndex = state.cart.findIndex((product) => product.productName === action.payload)
        //     if (productIndex !== -1) {
        //         state.cart[productIndex].quantity = state.cart[productIndex].quantity - 1;
        //     }
        // }
    },
})

// Action creators are generated for each case reducer function
export const { setKeyword, resetKeyword } = filterSlice.actions

export default filterSlice.reducer