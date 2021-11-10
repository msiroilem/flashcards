'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Deck extends Model {
    static associate(models) {
      Deck.belongsTo(models.User, {
        foreignKey: 'user_id'
      })
      Deck.hasMany(models.Card, {
        foreignKey: 'deck_id'
      })
    }
  }
  Deck.init(
    {
      name: DataTypes.STRING,
      card_id: DataTypes.INTEGER,
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
