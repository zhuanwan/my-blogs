const api = require('./api')

const mock = (app) => {
  app.use('/api', api)
}
module.exports = mock
