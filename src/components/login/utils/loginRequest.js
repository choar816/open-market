import { API_URL } from '/src/utils/api';

export const sendLoginRequest = (userType, { id, pw }) => {
  return fetch(`${API_URL}/accounts/login/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: id,
      password: pw,
      login_type: userType,
    }),
  })
    .then((res) => res.json());
};
