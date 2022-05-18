import { API_URL, URL_SCAN } from "../config"
import axios from "axios";

function getUserMail(petId) {
  return axios.get(URL_SCAN + "/" + petId).then(response => response.data)
  .catch(err => {
    console.log(err);
  });
}

function sendMail(mailsInfos) {
  console.log(mailsInfos);
  axios.post(API_URL + 'email', { data: mailsInfos }, { headers: {
    'Content-Type': 'application/json',
  } })
  .then(response => { 
    console.log(response)
  })
  .catch(error => {
      console.log(error.response)
  });
}

const exportedObject = {
  getUserMail,
  sendMail,
};

export default exportedObject;