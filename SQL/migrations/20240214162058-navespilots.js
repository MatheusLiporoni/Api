'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("navespilots" , {
      id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      navesid:{
        type: Sequelize.INTEGER,
        references: {model:'naves' , key:"id"},
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },

      pilotid:{
        type: Sequelize.INTEGER,
        references: {model: "pilotos" , key:"id"},
        onUpdate: "CASCADE",
        onDelete: "CASCADE"

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
    await queryInterface.dropTable("navespilots")
   
  }
};
