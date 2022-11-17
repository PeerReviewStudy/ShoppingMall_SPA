export default function CartPage({ $target }) {
  const container = document.createElement('div');
  container.className = 'CartPage';
  container.innterHTML = '<h1>장바구니</h1>';

  this.render = () => {
    $target.appendChild(container);
  };
}
