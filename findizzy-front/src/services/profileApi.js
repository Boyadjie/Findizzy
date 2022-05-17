import { URL_USERS, URL_PETS, getHeader } from "../config"
import axios from "axios";

function findUser() {
  return axios.get(URL_USERS + "/me", getHeader()).then(response => response.data)
  .catch(err => {
    console.log(err);
  });
}

function findUserPets() {
  const userId = window.localStorage.getItem("userId");
  return axios.get(URL_PETS + "?filters[user][id][$eq]=" + userId, getHeader()).then(response => response.data)
  .catch(err => {
    console.log(err);
  });
}

const exportedObject = {
  findUser,
  findUserPets,
};

export default exportedObject;