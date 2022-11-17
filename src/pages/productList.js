import { product } from "./product.js";

export const productList = (rootEl, props) => {
  rootEl.innerHTML = `
    <div class="ProductListPage">
        <h1>상품목록</h1>
        <ul id="ProductList">
        </ul>
      </div> 
  `;

  const prdtListEl = document.getElementById("ProductList");

  fetch("http://localhost:3000/productsList")
    .then((response) => response.json())
    .then((result) => {
      prdtListEl.innerHTML = "";
      result.forEach((p) => {
        product(prdtListEl, { ...p, onClick: props.handleProductClick });
      });
    });
};