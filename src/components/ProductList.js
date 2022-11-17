import { routeChange } from "../../router.js"

export default function ProductList({ $target, initialState }) {
  const $productList = document.createElement('ul')
  $target.appendChild($productList)

  this.state = initialState

  this.setState = nextState => {
    this.state = nextState
    this.render()
  }

  this.render = () => {
    if (!this.state) {
      return
    }
    const list = this.state
      .map(
        (product) => 
        // 1. data-product-id라는 이름으로 custom attribute를 만들고
        `<li class="Product" data-product-id="${product.id}">
          <img src="${product.imageUrl}">
          <div class="Product__info">
            <div>${product.name}</div>
            <div>${product.price}~</div>
          </div>
        </li>`
      )
      .join('');

    $productList.innerHTML = list;
  };

  this.render();

  // 2. event delegation(위임)을 통해 productId를 뽑아와서 routeChange 함수를 통해 URL 변경을 처리한다.
  $productList.addEventListener('click', (e) => {
    const $li = e.target.closest('li')
    const { productId } = $li.dataset
    console.log($li)
    if (productId) {
      routeChange(`/products/${productId}`)
    }
  })
}