const basicAuth = require('basic-auth-connect');

module.exports = {
  devServer: {
    //contentBase: path.join(__dirname, 'dist'),
    before(app) {
      app.use(basicAuth('username', 'password'));
    },
  }
}