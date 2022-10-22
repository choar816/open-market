import { API_URL } from '/src/utils/api';

export const getStores = async () => {
  const stores = await fetch(`${API_URL}/stores/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json());
  return stores;
};
