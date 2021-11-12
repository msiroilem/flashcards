const { Deck } = require('../models')

const GetAllDecks = async (req, res) => {
  try {
    const deck = await Deck.findAll()
    res.send(deck)
  } catch (error) {
    res.status(500).send({ error: error })
  }
}

const GetDeck = async (req, res) => {
  try {
    const deck = await Deck.findOne({
      where: { id: req.params.deck_id }
    })
    if (deck) {
      return res.send(deck)
    }
    return res.send({ msg: 'not found' })
  } catch (error) {
    return res.status(500).send({ msg: error })
  }
}

const CreateDeck = async (req, res) => {
  try {
    const deck = await Deck.create({ ...req.body })
    return res.send(deck)
  } catch (error) {
    return res.status(409).send({ msg: 'already exists' })
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
  GetAllDecks,
  GetDeck,
  CreateDeck,
  DeleteDeck
}
