import { getProduct } from "../../api.js"
import ProductDetail from "../components/ProductDetail.js"

export default function ProductDetailPage ({ $target, productId }) {
  this.state = {
    productId,
    product: null
  }
  const $page = document.createElement('div')
  $page.className = 'ProductDetailPage'
  $page.innerHTML = '<h1>상품 정보</h1>'

  this.setState = nextState => {
    this.state = nextState
    this.render()
  }

  this.render = () => {
    if (!this.state.product) {
      $target.innerHTML = 'Loading..'
    } else {
      $target.innerHTML = ''
      $target.appendChild($page)
      // ProductDetail 렌더링하기
      new ProductDetail({ 
        $target: $page,
        initialState: {
          product: this.state.product,
          // ProductDetail의 initialState에 선택된 상품들을 담아둘 selectedOptions 추가
          selectedOptions: []
          }
        })
    }
  }
  this.fetchProduct = async () => {
    const { productId } = this.state
    const product = await getProduct(productId);
    // console.log(product)
    this.setState({...this.state, product})
  }
  this.fetchProduct()
}