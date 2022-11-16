import ProductListPage from "./pages/ProductListPage.js"
import CartPage from "./pages/CartPage.js"
import ProductDetailPage from "./pages/ProductDetailPage.js"

function App({$target}) {
  this.route = () => {
    const { pathname } = location

    $target.innerHTML = ''

    if (pathname === '/') {
      console.log(pathname)
      new ProductListPage({$target}).render()
    } else if (pathname === '/cart') {
      new CartPage({$target}).render()
    } else if (pathname.indexOf('/products/') === 0) {
      const [ , , productId] = pathname.split('/')
      new ProductDetailPage({$target, productId}).render()
    }
  }
  this.route()
}

export default App