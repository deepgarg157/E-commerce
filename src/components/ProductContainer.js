import {items} from "../utility/constant"
import ProductCard from "./ProductCard";

const ProductContainer = () =>{

    return(
        <div className="flex flex-wrap bg-gray-200">
            {items.map((item)=> <ProductCard key={item.id} itemCardInfo = {item} />)}
            
        </div>
    )
}

export default ProductContainer;