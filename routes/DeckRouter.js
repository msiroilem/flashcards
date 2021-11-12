const router = require('express').Router()
const controller = require('../controllers/DeckController')
const middleware = require('../middleware')

router.get(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.GetDecks
)

router.get(
  '/:deck_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.GetDeckById
)

router.post(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateDeck
)

router.put(
  '/:deck_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdateDeck
)

router.delete(
  '/:deck_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteDeck
)

module.exports = router
