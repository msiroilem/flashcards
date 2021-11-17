const router = require('express').Router()
const controller = require('../controllers/CardController')
const middleware = require('../middleware')

router.get(
  '/:deck_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.GetCards
)

router.post(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateCard
)

router.put(
  '/:card_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdateCard
)

router.delete(
  '/:card_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteCard
)

module.exports = router
