import GameList from "../models/GameModel.js";
import Users from "../models/UserModel.js";
import { Op } from "sequelize";

export const getGame = async (req, res) => {
  try {
    let response;
    if (req.role === "admin") {
      response = await GameList.findAll({
        attributes: ["uuid", "name", "develop", "price"],
        include: [
          {
            model: Users,
            attributes: ["name", "email"],
          },
        ],
      });
    } else {
      response = await GameList.findAll({
        where: {
          userId: req.userId,
        },
        include: [
          {
            model: Users,
            attributes: ["name", "email"],
          },
        ],
      });
    }
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
export const getGameById = async (req, res) => {
  try {
    const game = await GameList.findOne({
      where: {
        uuid: req.params.id,
      },
    });
    if (!game) return res.status(404).json({ msg: "Game tidak ditemukan" });
    let response;
    if (req.role === "admin") {
      response = await GameList.findAll({
        attributes: ["uuid", "name", "develop", "price"],
        where: {
          id: game.id,
        },
        include: [
          {
            model: Users,
            attributes: ["name", "email"],
          },
        ],
      });
    } else {
      response = await GameList.findAll({
        where: {
          [Op.and]: [{ id: game.id }, { userId: req.userId }],
          userId: req.userId,
        },
        include: [
          {
            model: Users,
            attributes: ["name", "email"],
          },
        ],
      });
    }
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
export const createGame = async (req, res) => {
  const { name, develop, price } = req.body;
  try {
    await GameList.create({
      name: name,
      develop: develop,
      price: price,
      userId: req.userId,
    });
    res.status(201).json({ msg: "Game berhasil ditambahkan" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
export const updateGame = async (req, res) => {
  try {
    const game = await GameList.findOne({
      where: {
        uuid: req.params.id,
      },
    });
    if (!game) return res.status(404).json({ msg: "Game tidak ditemukan" });
    const { name, develop, price } = req.body;

    if (req.role === "admin") {
      await GameList.update(
        { name, develop, price },
        {
          where: {
            id: game.id,
          },
        }
      );
    } else {
      if (req.userID != game.userId)
        return res.status(403).json({ msg: "Anda tidak memiliki akses" });
      await GameList.update(
        { name, develop, price },
        { where: { [Op.and]: [{ id: game.id }, { userId: req.userId }] } }
      );
    }
    res.status(200).json({ msg: "Game berhasil diupdate" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
export const deleteGame = async (req, res) => {
  try {
    const game = await GameList.findOne({
      where: {
        uuid: req.params.id,
      },
    });
    if (!game) return res.status(404).json({ msg: "Game tidak ditemukan" });

    if (req.role === "admin") {
      await GameList.destroy({
        where: {
          id: game.id,
        },
      });
    } else {
      if (req.userID != game.userId)
        return res.status(403).json({ msg: "Anda tidak memiliki akses" });
      await GameList.destroy({
        where: { [Op.and]: [{ id: game.id }, { userId: req.userId }] },
      });
    }
    res.status(200).json({ msg: "Game berhasil dihapus" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
