import axios from "axios";

function createPet(pet) {
  axios.post('http://localhost:1337/api/pets', { data: pet })
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