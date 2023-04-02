import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: IFilter = {
    category: 0,
    sort: {name: 'ЦЕНА 🠕', property: '&sortBy=price&order=asc'},
    currentPage: 1,
    minPrice: 0,
    maxPrice: 10000,
    manufacture: '',
    arrayManufacture: [],
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setCategory(state, action: PayloadAction<number>) {
            state.category = action.payload;
        },
        setSort(state, action: PayloadAction<string>) {
            state.sort.property = action.payload;
        },
        setCurrentPage(state, action: PayloadAction<number>) {
            state.currentPage = action.payload;
        },
        setMinPrice(state, action: PayloadAction<number>) {
            state.minPrice = action.payload;
        },
        setMaxPrice(state, action: PayloadAction<number>) {
            state.maxPrice = action.payload;
        },
        setManufacture(state, action: PayloadAction<string>) {
            state.manufacture = action.payload;
        },
        addManufactToArray(state, action: PayloadAction<string>) {
            state.arrayManufacture.push(action.payload);
        },
        filterArrayManufactures(state, action: PayloadAction<string>) {
            state.arrayManufacture = state.arrayManufacture.filter(skill => skill !== action.payload);
        }
    }
})

export const {
    setCategory,
    setSort,
    setCurrentPage,
    setMinPrice,
    setMaxPrice,
    setManufacture,
    addManufactToArray,
    filterArrayManufactures
} = filterSlice.actions;

export default filterSlice.reducer;