const BASE_URL = "http://localhost:1234";

const fetcher = async (url) => {
  try {
    const response = await fetch(`${BASE_URL}${url}`);
    if (response.ok) {
      const data = await response.json()
      return data;
    }
    throw new Error('API 통신 실패')
  } catch (e) {
    alert(e.message)
  }
}

export const getProducts = () => fetcher("/products");
export const getProduct = (id) => fetcher(`/products/${id}`);