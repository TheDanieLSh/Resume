import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
    name: 'foundItems',
    initialState: {
        foundItems: [],
    },
    reducers: {
        setValue(state, action) {
            state.foundItems = action.payload;
        }
    }
})

export const { setValue } = searchSlice.actions;
export default searchSlice.reducer;