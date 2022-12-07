import type { Response, Request } from "express";

const getUsers = async (req: Request, res: Response) => {
  try {
    res.send("Test user 1 Success");
  } catch (error) {
    res.send(error);
  }
};

module.exports = { getUsers };
