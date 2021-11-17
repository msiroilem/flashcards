const { Card, Deck, User } = require('../models')

//GetCards, GetCardById and CreateCard methods are modeled after DeckController methods...let me know if this is way off or not...

const GetCards = async (req, res) => {
  try {
    const cards = await Card.findAll({
      where: { deck_id: res.locals.payload.id }
    })
    res.send(cards)
  } catch (error) {
    res.status(500).send({ error: error })
  }
}

//not sure if this is along the lines of what you want or not?
const CreateCard = async (req, res) => {
  try {
    const card = await Card.create({
      user_id: res.locals.payload.id,
      deck_id: req.body.deck_id,
      question: req.body.question,
      answer: req.body.answer
    })
    res.send(card)
  } catch (error) {
    res.status(500).send({ error: error })
  }
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
  CreateCard,
  UpdateCard,
  DeleteCard
}
