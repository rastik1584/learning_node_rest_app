'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'posts',
      'deletedAt', {
        type: Sequelize.DATE
      }
    )
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('posts', 'deletedAt')
    ])
  }
};
