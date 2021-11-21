"use strict";

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable("Clients", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      cpf: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
      },
      cellphone: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      phone: {
        allowNull: true,
        type: DataTypes.STRING,
      },

      birthday: {
        allowNull: true,
        type: DataTypes.DATE,
      },

      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable("Clients");
  },
};
