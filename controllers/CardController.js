const { Card, Deck, User } = require('../models')

//GetCards, GetCardById and CreateCard methods are modeled after DeckController methods...let me know if this is way off or not...

const GetCards = async (req, res) => {
  try {
    const cards = await Card.findAll({
      where: { card_id: res.locals.payload.id }
    })
    res.send(cards)
  } catch (error) {
    res.status(500).send({ error: error })
  }
}

const GetCardById = async (req, res) => {
  try {
    const id = req.params.card_id
    const card = await Card.findAll({
      where: { id: id }
    })
    res.send(card)
  } catch (error) {
    res.status(500).send({ error: error })
  }
}

//not sure if this is along the lines of what you want or not?
const CreateCard = async (req, res) => {
  try {
    const deck = await Deck.findOne({
      where: { id: res.locals.payload.id }
    })
    if (deck) {
      const card = await Card.create({
        deck_id: res.locals.payload.id,
        question: req.body.question,
        answer: req.body.answer
      })
      return res.send(card)
    }
    res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
  } catch (error) {}
}

const UpdateCard = async (req, res) => {
  try {
  } catch (error) {}
}

const DeleteCard = async (req, res) => {
  try {
  } catch (error) {}
}

module.exports = {
  GetCards,
  GetCardById,
  CreateCard,
  UpdateCard,
  DeleteCard
}
