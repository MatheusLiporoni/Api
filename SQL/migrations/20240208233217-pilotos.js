'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("pilotos", {
      id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement:true,
        primaryKey: true
      },
      name:{
        type: Sequelize.STRING,
        allowNull: false
      },
      birthday:{
        type: Sequelize.DATE,
        allowNull: false

      },   

      createdAt:{
        type: Sequelize.DATE
      },
      updatedAt:{
        type: Sequelize.DATE
      }

    })
    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("pilotos")


  }
};
