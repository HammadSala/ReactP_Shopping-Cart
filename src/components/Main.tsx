import '../css/index.css';
import ProductModel from '../Model/ProductModel';
import Product from './Product';

type Props = {
    products : ProductModel[];
    onAdd : Function;
}

const Main = ( {products, onAdd}: Props) => {
    
    const element  = (
        <main className="block col-2">
          <h2>Products</h2>
          <hr/>
          <div className="row">
            {products.map((product) => (
              <Product key={product.id} product={product} onAdd={onAdd} ></Product>
            ))}
          </div>
        </main>
      );
    
    return element;
}

export default Main;