import { useParams } from "react-router-dom";
import { items } from "../utility/constant";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const ProductInfo = () => {

    const { id } = useParams()

    const [product, setProduct] = useState({})

    const [relatedProduct, setRelatedProduct] = useState([])

    useEffect(() => {
        const filterProduct = items.filter((product) => product.id == id)
        setProduct(filterProduct[0])

        const relatedProducts = items.filter((related)=> related.category === product.category)

        setRelatedProduct(relatedProducts)
    }, [id, product.category])

    

    return (
        <div>

            <img className="w-96 h-96 mx-auto" src={product.imgSrc}></img>
            <div className="mx-[675px]">
                <h1 className="font-bold text-lg">{product.title}</h1>
                <p className="w-[300px] mt-2">{product.description}</p>
                <div className="flex mt-2 mx-5 w-48">
                    <button className="bg-blue-600 text-white px-2 py-1 rounded-lg mx-2">{product.price}</button>
                    <button className=" bg-yellow-500 px-2 py-1 rounded-lg">Add to Cart</button>
                </div>
            </div>

            <div className="flex flex-wrap">
            {relatedProduct.map((related)=> <ProductCard itemCardInfo={related}/>)}
            </div>
        </div>
    )
}

export default ProductInfo;