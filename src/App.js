import { LOCATION_TYPE } from './lib/contants.js';
import CartPage from './pages/CartPage.js';
import ProductDetailPage from './pages/ProductDetailPage.js';
import ProductListPage from './pages/ProductListPage.js';
import { getLocationType } from './utils/location.js';

import { init } from './utils/route.js';
export default function App({ $target }) {
  this.route = () => {
    const { pathname } = location;
    $target.innerHTML = '';

    const locationType = getLocationType(pathname);
    console.log('locationType', locationType)

    switch(locationType) {
      case LOCATION_TYPE.PRODUCTLIST :
        new ProductListPage({ $target }).render();
        break;
      case LOCATION_TYPE.PRODUCTS :
        const [, , productId] = pathname.split('/');
        new ProductDetailPage({ $target, productId }).render();
        break;
      case LOCATION_TYPE.PRODUCTS :
        new CartPage({ $target }).render();
        break;
    }
  }

  init(this.route);
  this.route();

  window.addEventListener('popstate', this.route);
}