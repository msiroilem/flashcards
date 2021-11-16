'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('decks', 'card_id', {
      type: Sequelize.INTEGER
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('decks', 'card_id', {
      type: Sequelize.INTEGER
    })
  }
}
