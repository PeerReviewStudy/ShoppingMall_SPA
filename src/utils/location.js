import { LOCATION_TYPE } from '../lib/contants.js';

export const getLocationType = (pathname) => {
  if (pathname === '/products') {
    return LOCATION_TYPE.PRODUCTS;
  }

  if (pathname === '/cart') {
    return LOCATION_TYPE.CART;
  }

  if (pathname === '/' ){
    return LOCATION_TYPE.PRODUCTLIST;
  }
  
};