import {createSlice} from "@reduxjs/toolkit";
import getProductFromLocalStorage from "../utils/getProductFromLocalStorage";
import getTotalPriceFromLocalStorage from "../utils/getTotalPriceFromLocalStorage";

const {products,totalPrice} = getProductFromLocalStorage();

const initialState: ICard = {
    products: products,
    totalPrice: totalPrice,
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
            state.totalPrice = getTotalPriceFromLocalStorage(state.products);
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
            state.totalPrice = getTotalPriceFromLocalStorage(state.products);
        },
        removeProductFromBasked(state, action) {
            const products = state.products.filter(obj => obj.id !== action.payload);
            state.products = products;
            state.totalPrice = getTotalPriceFromLocalStorage(products);
        },
        clearProducts(state) {
            state.products = [];
            state.totalPrice = 0;
        }
    }
})

export const {addProduct, removeProduct, clearProducts, removeProductFromBasked} = productSlice.actions;

export default productSlice.reducer;