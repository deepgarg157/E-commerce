import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterSearchDataInfo, searchText, toggleSearchFilter } from "../utility/searchSlice";
import { items } from "../utility/constant";
import { Link } from "react-router-dom";

const Header = () => {

    const searchFilter = useSelector(store => store.search.filterSearchInput)

    const dispatch = useDispatch()

    const handleSearchInput = (e) => {
        dispatch(searchText(e.target.value))
    }

    return (
        <div className="sticky top-0">
            <div className="flex justify-around p-2 bg-orange-100">
                <div>
                    <a href="/"><h1 className="my-6 cursor-pointer text-xl font-bold">E-Commerce</h1></a>
                </div>
                <div>
                    <input className="my-5 w-[450px] border border-gray-200 px-5 py-1 rounded-md bg-gray-100 text-gray-800" type="text" placeholder="Search for Products, Brands, and More....." onChange={handleSearchInput} ></input>
                    <button className="bg-gray-300 px-3 py-1 rounded-lg mx-2" onClick={() => {
                        const searchTextFilter = items.filter((filterData) => filterData.category == searchFilter)
                        dispatch(filterSearchDataInfo(searchTextFilter))
                        dispatch(toggleSearchFilter(true))
                    }}>Search</button>
                </div>
                <div>
                    <img className="w-10 my-5 rounded-md cursor-pointer" src="https://i.pinimg.com/564x/2b/35/a4/2b35a4763a31b6f5f40d9de9d7e05f88.jpg"></img>
                </div>
            </div>

            <div className="">
             <ul className="flex justify-between p-5 bg-purple-400 text-white font-medium text-lg">
                <li>Filter By :-</li>
                <li className="cursor-pointer">No Filter</li>
                <li className="cursor-pointer">Mobiles</li>
                <li className="cursor-pointer">Laptops</li>
                <li className="cursor-pointer">Tablets</li>
                <li className="cursor-pointer">&gt;=29999</li>
                <li className="cursor-pointer">&gt;=69999</li>
                <li className="cursor-pointer">&gt;=89999</li>
             </ul>
            </div>
        </div>
    )
}

export default Header;