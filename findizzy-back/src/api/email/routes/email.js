module.exports = {
  routes: [
    { // Path defined with a URL parameter
      method: 'POST',
      path: '/email',
      handler: 'email.sendMail',
    }
  ]
}