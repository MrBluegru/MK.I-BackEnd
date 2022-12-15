import type { Response, Request } from "express";

const getAgents = async (req: Request, res: Response) => {
  try {
    res.send("Hi from Agents");
  } catch (error) {
    res.send(error);
  }
};

module.exports = { getAgents };
