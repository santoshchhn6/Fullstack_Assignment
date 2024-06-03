import express from "express";
import { Login, Signup } from "../Controllers/AuthController.js";
import { tokenVarification } from "../Middlewares/TokenVarification.js";

const router = express.Router();

router.post("/signup", Signup);
router.post("/login", Login);
// router.post("/", tokenVarification);

export default router;
