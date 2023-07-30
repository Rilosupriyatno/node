import { Sequelize } from "sequelize";
const db = new Sequelize("game_store", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
