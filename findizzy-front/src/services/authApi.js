import { URL_LOGIN } from "../config"
import axios from "axios";
import jwtDecode from "jwt-decode"

function authenticate(credentials) {
  axios.post(URL_LOGIN, credentials)
  .then(res => res.data)
  .then(data => {
    window.localStorage.setItem('authToken', data.jwt);
    window.localStorage.setItem('userId', data.user.id);
    axios.defaults.headers["Authorization"] = "Bearer " + data.jwt;
  })
  .catch(error => {
      console.log(error.response)
  });
}

function isAuthenticated() {
  const token = window.localStorage.getItem('authToken');

  if(token){
    const {exp} = jwtDecode(token);

    if(exp * 1000 > new Date().getTime()){
      return true;
    }else {
      return false;
    }
  }else {
    return false;
  }
}

function logout() {
  window.localStorage.removeItem('authToken');
  window.localStorage.removeItem('userId');
  delete axios.defaults.headers['Authorization'];
}

function setup() {
  const token = window.localStorage.getItem('authToken');

  if(token){
    const {exp} = jwtDecode(token);

    if(exp * 1000 > new Date().getTime()){
      axios.defaults.headers["Authorization"] = "Bearer " + token;
    }
  }
}

const exportedObject = {
  authenticate,
  isAuthenticated,
  logout,
  setup,
};

export default exportedObject;