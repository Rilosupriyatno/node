import express from "express";
import { getUsers, getUserById, Delete } from "../controller/Users.js";
// import { verifyToken } from "../middleware/VerifyToken.js";
// import { refreshToken } from "../controller/RefreshToken.js";
import { verifyUser, adminOnly } from "../middleware/Auth.js";
const router = express.Router();
// router.get("/users", verifyToken, getUsers);
router.get("/users", verifyUser, adminOnly, getUsers);
router.post("/users/:id", verifyUser, adminOnly, getUserById);
// router.get("/token", verifyUser, refreshToken);
router.delete("/users/:id", verifyUser, adminOnly, Delete);

export default router;
