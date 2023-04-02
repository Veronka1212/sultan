import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSelectProduct = createAsyncThunk(
    'card/fetchProductStatus',
    async (id: string) => {
        const response = await axios.get('https://641db24c945125fff3d3c0b1.mockapi.io/item/' + id);
        return response.data;
    }
)

const initialState: IProduct = {
    item: {
        id: '',
        url: '',
        name: '',
        size_type: '',
        size: 0,
        barcode: 0,
        manufacturer: '',
        brand: '',
        price: 0,
        description: '',
        count: 0,
    }
}

const cardSlice = createSlice({
    name: 'card',
    initialState,
    reducers: {
        getProduct(state, action) {
            state.item = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchSelectProduct.fulfilled, (state, action) => {
            state.item = action.payload;

        })
    }
})

export const {getProduct} = cardSlice.actions;

export default cardSlice.reducer;