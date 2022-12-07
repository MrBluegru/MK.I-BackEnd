import { Sequelize, DataTypes } from "sequelize";

export const Test1 = (sequelize: Sequelize) =>
  sequelize.define(
    "test1",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: false,
    }
  );
