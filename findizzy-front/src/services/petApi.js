import { URL_PETS, getHeader } from "../config"
import axios from "axios";

function createPet(pet) {
  axios.post(URL_PETS, { data: pet }, getHeader())
  .then(response => { 
    console.log(response)
  })
  .catch(error => {
      console.log(error.response)
  });
}

function getPet(id) {
  return axios.get(URL_PETS + "/" + id, getHeader()).then(response => response.data)
  .catch(err => {
    console.log(err);
  });
}


const exportedObject = {
  createPet,
  getPet,
};

export default exportedObject;