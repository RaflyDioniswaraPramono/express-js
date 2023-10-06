'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('actor_migrate', {      
      actor_id: {
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      last_update: {
        type: Sequelize.DATE
      },
      age: {
        type: Sequelize.INTEGER
      },      
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('actor_migrate');
  }
};