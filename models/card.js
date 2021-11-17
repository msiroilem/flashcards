'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
    static associate(models) {}
  }
  Card.init(
    {
      question: DataTypes.STRING,
      answer: DataTypes.STRING,
      deck_id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'Card',
      tableName: 'cards'
    }
  )
  return Card
}
