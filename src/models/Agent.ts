import { Sequelize, DataTypes, UUIDV4 } from "sequelize";
import { SEX, STATUS_AGT } from "./values.enum";

export const Agent = (sequelize: Sequelize) =>
  sequelize.define(
    "agent",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
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
      badgeNumber: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
      dateOfBrith: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      placeOfBrith: {
        type: DataTypes.STRING,
        allowNull: true,
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
      startOfService: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      status: {
        type: DataTypes.ENUM,
        values: [
          STATUS_AGT.ACTIVE,
          STATUS_AGT.MIA,
          STATUS_AGT.KIA,
          STATUS_AGT.POW,
          STATUS_AGT.WIA,
          STATUS_AGT.INACTIVE,
        ],
      },
    },
    {
      timestamps: false,
    }
  );
