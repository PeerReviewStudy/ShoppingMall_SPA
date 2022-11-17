// window.onload = () => {
//   const main = document.querySelector('.app');

//   const handleLocationChange = (e) => {
//     console.log('locationOnChanged');
//   }
  

//   window.addEventListener("locationchange", handleLocationChange);
// }

import App from './App.js';

new App({ $target: document.querySelector('.App')})