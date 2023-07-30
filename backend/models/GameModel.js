import { Sequelize } from "sequelize";
import db from "../config/database.js";
import Users from "./UserModel.js";

const { DataTypes } = Sequelize;

const GameList = db.define(
  "game_list",
  {
    uuid: {
      type: DataTypes.STRING,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [3, 100],
      },
    },
    develop: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    // refresh_token: {
    //   type: DataTypes.TEXT,
    //   allowNull: false,
    //   validate: {
    //     notEmpty: true,
    //   },
    // },
  },
  {
    freezeTableName: true,
  }
);
Users.hasMany(GameList);
GameList.belongsTo(Users, { foreignKey: "userId" });
export default GameList;
