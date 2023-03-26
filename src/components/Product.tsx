
import React from "react";
import ProductModel from "../Model/ProductModel";

type Props = {
    product: ProductModel
    onAdd : Function;

}

const Product = ( { product , onAdd  } : Props ) =>{

    const element = (
        <div className="product-style">
            <img className="small" src={product.image} alt={product.name}/>
            <h3>{product.name}</h3>
            <div>
                <button className="add-to-cart" onClick={()=>{onAdd(product)}}>Add to cart</button>
            </div>
        </div>
    );

    return element;
}

export default Product;