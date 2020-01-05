const router = require('express').Router(),
  apiroutes = require('./api')

router.use('/api', apiroutes)

module.exports = router