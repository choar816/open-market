import { API_URL } from '/src/utils/api';

export const sendJoinRequest = (userType, requestBody) => {
  return fetch(
    `${API_URL}/accounts/signup${userType === 'SELLER' ? '_seller' : ''}/`,
    requestBody,
  ).catch((e) => console.error(e));
};

export const joinBody = (
  userType,
  { id, pw, pwCheck, phone, name, sellerNum, storeName },
) => {
  const extraBody =
    userType === 'SELLER'
      ? {
          company_registration_number: sellerNum,
          store_name: storeName,
        }
      : {};

  return {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: id,
      password: pw,
      password2: pwCheck,
      phone_number: phone,
      name: name,
      ...extraBody,
    }),
  };
};

export const idDupBody = (id) => {
  return {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: id,
    }),
  };
};
