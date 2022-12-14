import { Sequelize, DataTypes, UUIDV4 } from "sequelize";
import { SEX, STATUS_MSSG } from "./values.enum";

export const Missing = (sequelize: Sequelize) =>
  sequelize.define(
    "missing",
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
      dateOfBirth: {
        type: DataTypes.DATE,
      },
      placeOfBirth: {
        type: DataTypes.STRING,
      },
      hair: {
        type: DataTypes.STRING,
      },
      eyes: {
        type: DataTypes.STRING,
      },
      height: {
        type: DataTypes.STRING,
      },
      weight: {
        type: DataTypes.STRING,
      },
      sex: {
        type: DataTypes.ENUM,
        values: [SEX.FEMALE, SEX.MALE],
        allowNull: false,
      },
      race: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      nationality: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      scarsAndMarks: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      reward: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      remarks: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      details: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      dateOfDisappearance: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      placeOfDisappearance: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      status: {
        type: DataTypes.ENUM,
        values: [STATUS_MSSG.FOUND, STATUS_MSSG.SEARCHING],
      },
    },
    {
      timestamps: false,
    }
  );
