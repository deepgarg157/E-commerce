import { useSelector } from "react-redux";
import {items} from "../utility/constant"
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

const ProductContainer = () =>{

    const searchFilterData = useSelector(store => store.search.filterSearchData)

    const filter = searchFilterData[0]

    const toggleSearchData = useSelector(store => store.search.isSearchFilter)

    return(
        <div className="flex flex-wrap bg-gray-200">

            {toggleSearchData ? filter.map((filter) => <Link to="/product"><ProductCard key={filter.id} itemCardInfo={filter}/></Link>) : items.map((item)=> <Link to={`/product/${item.id}`}><ProductCard key={item.id} itemCardInfo = {item} /></Link>)}
            
        </div>
    )
}

export default ProductContainer;