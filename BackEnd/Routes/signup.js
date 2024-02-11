import express from "express";
import { singUp } from "../Controllers/signup.js";

const router = express.Router();

router.post("/", singUp);

export default router;
