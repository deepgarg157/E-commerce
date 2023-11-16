import { useParams } from "react-router-dom";

const ProductInfo = ()=>{

    const {id} = useParams()

    return(
        <div>
            <div>
                <img className="w-96 h-96 mx-auto" src="https://m.media-amazon.com/images/I/71xb2xkN5qL._SL1500_.jpg"></img>
            </div>
        </div>
    )
}

export default ProductInfo;