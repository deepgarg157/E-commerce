import { useSelector } from "react-redux";
import {items} from "../utility/constant"
import ProductCard from "./ProductCard";

const ProductContainer = () =>{

    const searchFilterData = useSelector(store => store.search.filterSearchData)

    const filter = searchFilterData[0]

    const toggleSearchData = useSelector(store => store.search.isSearchFilter)

    return(
        <div className="flex flex-wrap bg-gray-200">

            {toggleSearchData ? filter.map((filter) => <ProductCard key={filter.id} itemCardInfo={filter}/>) : items.map((item)=> <ProductCard key={item.id} itemCardInfo = {item} />)}

            {/* {items.map((item)=> <ProductCard key={item.id} itemCardInfo = {item} />)} */}
            
        </div>
    )
}

export default ProductContainer;