import express from "express";
import {
  getGame,
  getGameById,
  createGame,
  updateGame,
  deleteGame,
} from "../controller/GameList.js";

import { verifyUser, adminOnly } from "../middleware/Auth.js";

const router = express.Router();

router.get("/games", verifyUser, getGame);
router.get("/games/:id", verifyUser, getGameById);
router.post("/games", verifyUser, adminOnly, createGame);
// router.get("/token", refreshToken);
router.patch("/games/:id", verifyUser, adminOnly, updateGame);
router.delete("/games/:id", verifyUser, adminOnly, deleteGame);

export default router;
