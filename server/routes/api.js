const router = require('express').Router(),
  ContactController = require('../controllers/contact')

router.get('/', ContactController.greet)
router.get('/all', ContactController.all)
router.post('/', ContactController.create)
router.delete('/:id', ContactController.remove)
router.put('/:id', ContactController.put)
router.patch('/:id/name', ContactController.updateName)
router.patch('/:id/phone', ContactController.updatePhone)

module.exports = router