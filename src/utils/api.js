import jwtDecode from "jwt-decode";

export const API_URL = 'https://openmarket.weniv.co.kr';

export const checkIfTokenValid = (token) => {
  if (jwtDecode(token).exp <= (new Date()).getTime() / 1000) {
    localStorage.clear();
    return false;
  }
}