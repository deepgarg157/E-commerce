import {createSlice} from "@reduxjs/toolkit"

const searchSlice = createSlice({
    name : "search",
    initialState : {
        filterSearchInput : '',
    },
    reducers : {
        searchText : (state, action)=>{
            state.filterSearchInput = action.payload;
        }
    }
})

export default searchSlice.reducer;

export const {searchText} = searchSlice.actions;