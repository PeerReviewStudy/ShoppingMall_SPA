const API_END_POINT = 'http://localhost:3000'
export const request = async (url, options = {}) => {
  try {
    const fullUrl = `${API_END_POINT}${url}`;
    console.log(fullUrl)
    const response = await fetch(fullUrl, options);
    console.log('response', response)
    if(response.ok) {
      const json = await response.json();
      return json;
    }
    throw new Error('API 통신 실패')
  } catch(error) {
    alert(error.message);
  }
}