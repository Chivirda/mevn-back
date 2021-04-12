const router = require('express-promise-router')()
const { Category } = require('../controllers')


router.route('/:id').get(Category.get)
router.route('/').post(Category.create)
router.route('/').get(Category.getAll)
router.route('/:id').put(Category.update)
router.route('/:id').delete(Category.delete)

module.exports = router
