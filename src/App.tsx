import React, { useState } from 'react';
import data from './data';
import Header from './components/Header';
import Basket from './components/Basket';
import Main from './components/Main';
import ProductModel from './Model/ProductModel';
import CartItemsModel from './Model/CartItemModel';


function App() {

  const { products } = data;
  const [cartItems, setCartItems ] = useState([] as CartItemsModel[]);

  const onAdd = (product : ProductModel) => {
      console.log("Add Product", product);

      const existingCartItem = cartItems.find(item => (product.id === item.id));
      if(existingCartItem) {
        const updatedCartItems = cartItems.map(item =>{
          return (item.id === existingCartItem.id) ? { ...item, qty: item.qty+1} : item;
          
        }
        
        );
        setCartItems(updatedCartItems);
      } else {
        const updatedCartItems = [...cartItems, { ...product, qty: 1}];
        setCartItems(updatedCartItems);
      }
  }
  
  const onRemove = (product : ProductModel) => {
    console.log("REmove Product", product);

    const existingCartItem = cartItems.find( item =>  item.id===product.id);
    if( existingCartItem ) {
      const updatedCartItem = cartItems.map(item => {
         return ( ((item.id === product.id)  ) ? {...item, qty:item.qty-1} : item);
      }).filter(item => item.qty > 0)
      setCartItems(updatedCartItem);
    }
}


  return (
    <div className="App">
      
      <Header countCartitems={cartItems.length}/>
      <div className="row">
        <Main  products={products} onAdd={onAdd}/>
        <Basket cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />
      </div>
    </div>
  );
}

export default App;
