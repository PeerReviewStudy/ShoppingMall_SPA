const BASE_URL = "http://localhost:3000";

const fetcher = async (url) => {
  try {
    const response = await fetch(`${BASE_URL}${url}`);
    if (response.ok) {
      const data = await response.json()
      return data;
    }
    throw new Error('API 통신 실패')
  } catch (e) {
    console.log(e.message)
  }
}

export const getProducts = () => fetcher("/products");
export const getProduct = (id) => fetcher(`/products/${id}`);