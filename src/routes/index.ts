import { Router } from "express";
import userRoute from "./routesUser";
import agentRoute from "./routesAgent";

const router = Router();

router.use("/users", userRoute);
router.use("/agents", agentRoute);

// router.use("/fugitives",userRoute);
// router.use("/missings",userRoute);

export default router;
