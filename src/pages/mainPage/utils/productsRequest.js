import { API_URL } from "/src/utils/api";

export const getProducts = async () => {
  return fetch(`${API_URL}/products/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => {
      if (!res.ok) throw new Error('http 에러');
      return res.json();
    })
    .then((data) => data.results)
    .catch((e) => console.error(e));
};