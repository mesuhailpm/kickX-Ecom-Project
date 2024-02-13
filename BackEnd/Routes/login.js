import express from "express";
import { signIn } from "../Controllers/login.js";
const router = express.Router();

router.post("/", signIn);

export default router;
