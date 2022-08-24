export const onlyNumber = (e) => {
  const regExp = /\D/g;
  e.target.value = e.target.value.replace(regExp, '');
};
