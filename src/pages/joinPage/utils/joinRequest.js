import { API_URL } from '/src/utils/api';

export const sendJoinRequest = (userType, requestBody) => {
  return fetch(
    `${API_URL}/accounts/signup${userType === 'SELLER' ? '_seller' : ''}/`,
    requestBody,
  );
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

export const checkIdDuplicate = (userType, id) => {
  return sendJoinRequest(userType, idDupBody(id))
    .then((res) => res.json())
    .then((data) => {
      if (data.username?.includes('해당 사용자 아이디는 이미 존재합니다.'))
        return true;
      return false;
    });
};
