import { request } from "../utils/api.js";
export default function ProductDetailPage({ $target }) {
  const container = document.createElement('div');
  container.className = 'ProductDetailPage';
  container.innterHTML = '<h1>커피잔 상품 정보</h1>';

  this.state = {
    productId,
    product: null
  }

  this.setState = nextState => {
    this.state = nextState;
    this.render();
  }

  this.render = () => {
    if(!this.state.product) {
      $target.innerHTML = "LOADING";
    } else {
      $target.innerHTML = '';
      $target.appendChild(container);
    }
    $target.appendChild(container);
  };

  this.fetchProduct = async () => {
    const { productId } = this.state;
    const product = await request(`/products/${productId}`);
    this.setState({
      ...this.state,
      product
    });
  }

  this.fetchProduct();
}
