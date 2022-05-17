export const API_URL = "http://localhost:1337/api/";

export const URL_PETS = API_URL + "pets"
export const URL_USERS = API_URL + "users"
export const URL_LOGIN = API_URL + "auth/local"
export const URL_REGISTER = API_URL + "auth/local/register"
export const URL_SCAN = API_URL + "scan"

export function getHeader() {
  const token = window.localStorage.getItem('authToken');

  return { headers: {
      Authorization:
        'Bearer ' + token,
    }
  }
}