import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
    'dataFetch/fetchProducts',
    async () => {
        const response = await fetch('/products.json');
        const data = await response.json();
        return data
    }
)

export const fetchDataSlice = createSlice({
    name: 'dataFetch',
    initialState: {
        products: null,
    },
    extraReducers: builder => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.products = action.payload;
        })
    }
})
export const { fetchData } = fetchDataSlice.actions;
export default fetchDataSlice.reducer;