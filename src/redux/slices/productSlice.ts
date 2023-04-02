import {createSlice} from "@reduxjs/toolkit";

interface CartSliceState {
    products: Product[];
    totalPrice: number;
}

const initialState: CartSliceState = {
    products: [],
    totalPrice: 0,
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        addProduct(state, action) {
            const findProduct = state.products.find(obj => obj.id === action.payload.id);
            if (findProduct) {
                findProduct.count++;
            } else {
                state.products.push({...action.payload, count: 1});
            }
            state.totalPrice = state.products.reduce((sum, pr) => {
                return (pr.price * pr.count) + sum;
            }, 0);
        },
        removeProduct(state, action) {
            const findProduct = state.products.find(obj => obj.id === action.payload);
            if (findProduct) {
                if (findProduct.count > 1) {
                    findProduct.count--;
                } else {
                    state.products = state.products.filter(obj => obj.id !== action.payload);
                }
            }
            state.totalPrice = state.products.reduce((sum, pr) => {
                return (pr.price * pr.count) + sum;
            }, 0);
        },
        removeProductFromBasked(state, action) {
            state.products = state.products.filter(obj => obj.id !== action.payload);
        },
        clearProducts(state) {
            state.products = state.products = [];
            state.totalPrice = 0;
        }
    }
})

export const {addProduct, removeProduct, clearProducts, removeProductFromBasked} = productSlice.actions;

export default productSlice.reducer;