import { configureStore } from '@reduxjs/toolkit'
import filterReducer from './slices/filterSlice'
import productReducer from './slices/productSlice'
import loadReducer from './slices/loadSlice';
import cardReducer from './slices/cardSlice';


export const store = configureStore({
    reducer: {
        filterReducer,
        productReducer,
        loadReducer,
        cardReducer
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;