import { Sequelize, DataTypes, UUIDV4 } from "sequelize";
import { SEX, STATUS_FUG } from "./values.enum";

export const Fugitive = (sequelize: Sequelize) =>
  sequelize.define(
    "fugitive",
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
      languages: {
        type: DataTypes.STRING,
      },
      aliases: {
        type: DataTypes.ARRAY,
      },
      criminalCharges: {
        type: DataTypes.ARRAY,
      },
      reward: {
        type: DataTypes.STRING,
      },
      remarks: {
        type: DataTypes.STRING,
      },
      caution: {
        type: DataTypes.STRING,
      },
      adidionalNews: {
        type: DataTypes.STRING,
      },
      searchStart: {
        type: DataTypes.STRING,
      },
      status: {
        type: DataTypes.ENUM,
        values: [STATUS_FUG.CAUGHT, STATUS_FUG.DEAD, STATUS_FUG.SEARCHING],
      },
    },
    {
      timestamps: false,
    }
  );
