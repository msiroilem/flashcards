const { Deck, User } = require('../models')

const GetDecks = async (req, res) => {
  try {
    const decks = await Deck.findAll({
      where: { user_id: res.locals.payload.user_id }
    })
    res.send(decks)
  } catch (error) {
    res.status(500).send({ error: error })
  }
}

const GetDeckById = async (req, res) => {
  try {
    const id = req.params.deck_id
    const deck = await Deck.findAll({
      where: { id: id }
    })
    res.send(deck)
  } catch (error) {
    res.status(500).send({ error: error })
  }
}

const CreateDeck = async (req, res) => {
  try {
    const user = await User.findOne({
      where: { id: res.locals.payload.id }
    })
    if (user) {
      const deck = await Deck.create({
        user_id: res.locals.payload.id,
        name: req.body.name
      })
      console.log('hello')
      return res.send(deck)
    }
    res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
  } catch (error) {
    console.log(error)
    res.status(500).send({ error: error })
  }
}

const UpdateDeck = async (req, res) => {
  try {
    const user = await User.findOne({
      where: { id: req.body.user_id }
    })
    if (user) {
      const deck = await Deck.update(
        { ...req.body },
        { where: { id: req.params.deck_id }, returning: true }
      )
      return res.send(deck)
    }
    res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
  } catch (error) {
    res.status(500).send({ error: error })
  }
}

const DeleteDeck = async (req, res) => {
  try {
    await Deck.destroy({ where: { id: req.params.deck_id } })
    res.send({
      msg: 'Deck deleted',
      payload: req.params.deck_id,
      status: 'Ok'
    })
  } catch (error) {
    res.status(500).send({ error: error })
  }
}

module.exports = {
  GetDecks,
  GetDeckById,
  CreateDeck,
  UpdateDeck,
  DeleteDeck
}
