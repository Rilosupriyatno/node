import { Login, Logout, Register, Me } from "../controller/Auth.js";
import express from "express";

const router = express.Router();

router.get("/me", Me);
router.post("/users", Register);
router.post("/login", Login);
router.delete("/logout", Logout);

export default router;
