const { Router } = require("express");
const { getAgents } = require("../controllers/agents");

const router = Router();

router.get("/", getAgents);

export default router;
