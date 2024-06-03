import express from "express";
import { getPosts } from "../Controllers/PostsController.js";
import { tokenVarification } from "../Middlewares/TokenVarification.js";

const router = express.Router();

router.get("/", tokenVarification, getPosts);

export default router;
