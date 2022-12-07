import { Sequelize, DataTypes } from "sequelize";

export const Test11 = (sequelize: Sequelize) =>
  sequelize.define(
    "test11",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      charge: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
