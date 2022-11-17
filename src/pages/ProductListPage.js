import ProductList from "../components/ProductList.js";
import { request } from "../utils/api.js";

export default function ProductListPage({ $target }) {
  const container = document.createElement('div');
  container.className = 'ProductListPage';
  container.innerHTML = '<h1>상품목록</h1>';

  this.render = () => {
    $target.appendChild(container);
  };

  this.setState = (nextState) => {
    this.state = nextState;
  }

  const fetchProducts = async () => {
    const products = await request('/products');
    this.setState(products);
  }

  const productList = new ProductList({
    $target: container,
    initialState: this.state
  })

  fetchProducts();
}
