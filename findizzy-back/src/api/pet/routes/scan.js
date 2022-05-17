module.exports = {
  routes: [
    { // Path defined with a URL parameter
      method: 'GET',
      path: '/scan/:petId',
      handler: 'scan.getUser',
    }
  ]
}