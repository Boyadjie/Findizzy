import { URL_USERS, URL_PETS } from "../config"
import axios from "axios";
import jwtDecode from "jwt-decode"

function getAuthUserId() {
  const token = window.localStorage.getItem('authToken');

  if(token){
    const {exp, id} = jwtDecode(token);

    if(exp * 1000 > new Date().getTime()){
      return id;
    }else {
      return false;
    }
  }else {
    return false;
  }
}

function findUser() {
  console.log(getAuthUserId());
  return axios.get(URL_USERS + "/1").then(response => response.data)
  .catch(err => {
    console.log(err);
  });
}

function findUserPets() {
  return axios.get(URL_PETS + "?filters[user][id][$eq]=1").then(response => response.data)
  .catch(err => {
    console.log(err);
  });
}

const exportedObject = {
  findUser,
  findUserPets,
};

export default exportedObject;