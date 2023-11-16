import {createSlice} from "@reduxjs/toolkit"

const searchSlice = createSlice({
    name : "search",
    initialState : {
        filterSearchInput : '',
        filterSearchData : [],
        isSearchFilter : false
    },
    reducers : {
        searchText : (state, action)=>{
            state.filterSearchInput = action.payload;
        },
        filterSearchDataInfo : (state, action)=>{
            state.filterSearchData.push(action.payload)
        },
        toggleSearchFilter : (state,action) =>{
            state.isSearchFilter = action.payload
        }
    }
})

export default searchSlice.reducer;

export const {searchText, filterSearchDataInfo, toggleSearchFilter} = searchSlice.actions;