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


const exportedObject = {
  createPet,
};

export default exportedObject;