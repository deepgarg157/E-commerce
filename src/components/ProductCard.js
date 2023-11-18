const ProductCard = ({ itemCardInfo }) => {

    return (
        <div className="mx-10 p-2 flex flex-col items-center">
            <img className="w-96 h-96 rounded-md border border-gray-300" src={itemCardInfo.imgSrc}></img>
            <h1 className="font-bold text-lg">{itemCardInfo.title}</h1>
            <p className="w-[300px] mt-2 ml-16">{itemCardInfo.description}</p>
            <div className="flex mt-2">
                <button className="bg-blue-600 text-white px-2 py-1 rounded-lg mx-2">{itemCardInfo.price}</button>
                <button className=" bg-yellow-500 px-2 py-1 rounded-lg">Add to Cart</button>
            </div>
        </div>
    )
}

export default ProductCard;