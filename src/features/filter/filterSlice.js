import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    searchKeyword: '',
    category: [],
    brand: []
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

        addCategory: (state, action) => {
            const isExist = state.category.includes(action.payload);
            if (isExist) {
                state.category = state.category.filter((cat) => cat !== action.payload)
            } else {
                state.category.push(action.payload)
            }
        },
        addBrand: (state, action) => {
            const isExist = state.brand.includes(action.payload);
            if (isExist) {
                state.brand = state.brand.filter((cat) => cat !== action.payload)
            } else {
                state.brand.push(action.payload)
            }
        }



    },
})

// Action creators are generated for each case reducer function
export const { setKeyword, resetKeyword, addCategory, addBrand } = filterSlice.actions

export default filterSlice.reducer