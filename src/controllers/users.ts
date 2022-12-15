import type { Response, Request } from "express";

const getUsers = async (req: Request, res: Response) => {
  try {
    res.send("Hi from users");
  } catch (error) {
    res.send(error);
  }
};

const postUsers = async (req: Request, res: Response) => {
  const { data } = req.body;
  try {

  }
  catch(error) {
    
  }
};

module.exports = { getUsers, postUsers };
