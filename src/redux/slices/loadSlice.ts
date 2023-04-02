import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk<Product[], IFilter>(
    'loading/fetchProductsStatus',
    async (params) => {
        const {sort, category, currentPage} = params;
        const response =
            await axios.get<Product[]>('https://641db24c945125fff3d3c0b1.mockapi.io/item?page='
            + currentPage + '&limit=3&prescription='
            + category + sort.property);
        return response.data;
    }
)

const initialState: ILoad = {
    items: []
}

const loadSlice = createSlice({
    name: 'loading',
    initialState,
    reducers: {
        getProducts(state, action: PayloadAction<Product[]>) {
            state.items = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.items = action.payload;
        })

    }
})

export const {getProducts} = loadSlice.actions;

export default loadSlice.reducer;