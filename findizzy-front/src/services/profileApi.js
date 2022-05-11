import { URL_USERS, URL_PETS } from "../config"
import axios from "axios";

function findUser() {
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