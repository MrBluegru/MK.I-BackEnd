import { Router } from "express";
import userRoute from "./routesUser";

const router = Router();

router.use("/user", userRoute);

export default router;
