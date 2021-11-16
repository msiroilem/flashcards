'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Deck extends Model {
    static associate(models) {}
  }
  Deck.init(
    {
      name: DataTypes.STRING,
      user_id: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'Deck',
      tableName: 'decks'
    }
  )
  return Deck
}
