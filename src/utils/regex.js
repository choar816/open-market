export const checkIdRegex = (id) => {
  const idRegex = /^[a-zA-Z0-9]{1,20}$/;
  return idRegex.test(id);
};

export const checkPwRegex = (pw) => {
  const pwRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#?!@$%^&*-])[A-Za-z\d#?!@$%^&*-]{8,}$/;
  return pwRegex.test(pw);
};

export const checkEmailRegex = (email) => {
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return emailRegex.test(email);
};
