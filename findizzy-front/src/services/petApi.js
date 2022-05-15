import { URL_PETS } from "../config"
import axios from "axios";

function createPet(pet) {
  axios.post(URL_PETS, { data: pet })
  .then(response => { 
    console.log(response)
  })
  .catch(error => {
      console.log(error.response)
  });
}

function getPet(id) {
  axios.get(URL_PETS + '/' + id)
  .then(response => response.data)
  .catch(error => {
      console.log(error.response)
  });
}


const exportedObject = {
  createPet,
  getPet,
};

export default exportedObject;