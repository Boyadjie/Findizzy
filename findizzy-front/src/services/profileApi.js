import { URL_USERS, URL_PETS } from "../config"
import axios from "axios";

function findUser() {
  const userId = window.localStorage.getItem("userId");
  return axios.get(URL_USERS + "/" + userId).then(response => response.data)
  .catch(err => {
    console.log(err);
  });
}

function findUserPets() {
  const userId = window.localStorage.getItem("userId");
  return axios.get(URL_PETS + "?filters[user][id][$eq]=" + userId).then(response => response.data)
  .catch(err => {
    console.log(err);
  });
}

const exportedObject = {
  findUser,
  findUserPets,
};

export default exportedObject;