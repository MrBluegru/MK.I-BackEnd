import { Sequelize, DataTypes, UUIDV4 } from "sequelize";
import { POSITION, STATUS_ACC } from "./values.enum";

export const User = (sequelize: Sequelize) =>
  sequelize.define(
    "user",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        primaryKey: true,
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      fullName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
      },
      position: {
        type: DataTypes.STRING,
        defaultValue: POSITION.INSPECTOR,
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING,
        defaultValue: STATUS_ACC.ACTIVE,
        allowNull: false,
      },
      accountCreation: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      timestamps: false,
    }
  );
