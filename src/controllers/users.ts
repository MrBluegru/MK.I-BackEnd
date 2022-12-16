import type { Response, Request } from "express";
import { UserModel } from "../db";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const allUsers = await UserModel.findAll();
    res.status(200).json({ allUsers });
  } catch (error) {
    console.log(error);
  }
};

export const postUsers = async (req: Request, res: Response) => {
  const { data } = req.body;
  try {
  } catch (error) {}
};
