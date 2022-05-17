import { URL_SCAN } from "../config"
import axios from "axios";

function getUserMail(petId) {
  return axios.get(URL_SCAN + "/" + petId).then(response => response.data)
  .catch(err => {
    console.log(err);
  });
}

const exportedObject = {
  getUserMail,
};

export default exportedObject;