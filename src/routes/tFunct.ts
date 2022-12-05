import type { Response, Request } from "express";

export const test1Funt = async (req: Request, res: Response) => {
  try {
    res.send("Test 1 Success");
  } catch (error) {
    res.send(error);
  }
};
