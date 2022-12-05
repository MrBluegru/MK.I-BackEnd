import { Router } from "express";
import test1 from "./test1";

const router = Router();

router.use("/test1", test1);

export default router;
