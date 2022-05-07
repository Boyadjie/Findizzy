
function findUser() {
  return fetch("http://localhost:1337/api/users/1", {
    method: "GET",
    headers: {
      'Accept': 'Application/json'
    }
  })
  .then(response => response.json())
  .catch(err => {
    console.log(err);
  });
}

function findUserPets() {
  return fetch("http://localhost:1337/api/pets?user=1", 
  {
    method: "GET",
    headers: {
      'Accept': 'Application/json'
    }
  })
  .then(response => response.json())
  .catch(err => {
    console.log(err);
  });
}

export default{
  findUser,
  findUserPets,
};