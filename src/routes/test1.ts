import { Router } from "express";
import { test1Funt } from "./tFunct";

const router = Router();

router.get("/", test1Funt);

export default router;
