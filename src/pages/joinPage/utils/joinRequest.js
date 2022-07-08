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

export const requestJoin = (userType, joinInputs) => {
  return sendJoinRequest(userType, joinBody(userType, joinInputs))
    .then((res) => res.json())
    .then((data) => {
      // 회원가입 성공
      if (data.user_type)
        return {
          user_type: data.user_type,
        };

      // 회원가입 실패
      return {
        id: data.username ? data.username.join(' ') : null,
        pw: data.password ? data.password.join(' ') : null,
        pwCheck: data.password2 ? data.password2.join(' ') : null,
        name: data.name ? data.name.join(' ') : null,
        phone: data.phone_number ? data.phone_number.join(' ') : null,
        sellerNum: data.company_registration_number
          ? data.company_registration_number.join(' ')
          : null,
        storeName: data.store_name ? data.store_name.join(' ') : null,
      };
    });
};
