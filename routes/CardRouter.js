const router = require('express').Router()
const controller = require('../controllers/CardController')
const middleware = require('../middleware')

router.get(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.GetCards
)

router.get(
  '/:deck_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.GetCardById
)

router.post(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateCard
)

router.put(
  '/:deck_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdateCard
)

router.delete(
  '/:deck_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteCard
)

module.exports = router
