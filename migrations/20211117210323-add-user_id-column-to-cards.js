'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('cards', 'user_id', {
      type: Sequelize.INTEGER
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('cards', 'user_id', {
      type: Sequelize.INTEGER
    })
  }
}
