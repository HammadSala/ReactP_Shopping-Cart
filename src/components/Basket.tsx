import React from "react";
import CartItemsModel from "../Model/CartItemModel";

type Props = {
    cartItems : CartItemsModel[];
    onAdd : Function;
    onRemove : Function
}
const Basket = ( { cartItems, onAdd, onRemove } : Props) => {

    // const itemsPrice1 = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
    const itemsPrice = cartItems.reduce((sum, item) => sum + (item.qty * item.price),0);
    const taxProce = itemsPrice * 0.14;
    const shippinProce = itemsPrice > 2000 ? 0 : 20;
    const totalProce = itemsPrice + taxProce + shippinProce ;

    // const itemPrice = cartItems.reduce((sum,item) =>{
        
    //     return sum;
    // })
    return (
        <aside>
            <div className="block col-1">
                <h2>Cart Items</h2>
                <div>
                    {
                        cartItems.length === 0 && <div>Cart is Empty</div> 
                    }
                    {
                        cartItems.map((cartItem) =>(
                            <div>
                                <div key={cartItem.id} className="row">
                                    <div className="col-2">
                                        {cartItem.name}
                                    </div>
                                    <div className="col-2">
                                        <button onClick= { () => onRemove(cartItem)}className="remove">-</button>
                                        { " "}
                                        <button onClick = { () => onAdd(cartItem)} className="add">+</button>
                                    </div>
                                </div>
                                <div className="col-2 text-right">
                                    {cartItem.qty} * Rs {cartItem.price.toFixed(2)}
                                </div>
                            </div>
                        ))
                    }
                    {
                        cartItems.length !== 0 && (
                            <>
                                <hr />
                                <div className="row">
                                    <div className="col-1">Items Price</div>
                                    <div className="col-2 text-right">{itemsPrice.toFixed(2)}</div>
                                </div>
                                <div className="row">
                                    <div className="col-1">Tax Price</div>
                                    <div className="col-2 text-right">{taxProce.toFixed(2)}</div>
                                </div>
                                <div className="row">
                                    <div className="col-1">Shipping Price</div>
                                    <div className="col-2 text-right">{shippinProce.toFixed(2)}</div>
                                </div>
                               
                                <hr />
                                <div className="row">
                                    <div className="col-1">
                                        <strong>
                                        Total Price
                                        </strong>
                                    </div>
                                    <div className="col-2 text-right">
                                        <strong>{totalProce.toFixed(2)}</strong>
                                    </div>
                                </div>

                                <div>
                                    <button className="add-to-cart" onClick={()=>{alert(`Item checked out`)}}>Checkout</button>
                                </div>
                                
                            </>
                        )
                    }
                </div>
            </div>
        </aside>
        
    );
    
}

export default Basket;