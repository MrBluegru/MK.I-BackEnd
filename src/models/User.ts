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
        type: DataTypes.ENUM(
          POSITION.CEO,
          POSITION.INSPECTOR,
          POSITION.MANAGER
        ),
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM(
          STATUS_ACC.ACTIVE,
          STATUS_ACC.BAN,
          STATUS_ACC.INACTIVE
        ),
        defaultValue: STATUS_ACC.ACTIVE,
        allowNull: true,
      },
      accountCreation: {
        type: DataTypes.DATEONLY,
        defaultValue: DataTypes.NOW,
        allowNull: true,
      },
    },
    {
      timestamps: false,
    }
  );
