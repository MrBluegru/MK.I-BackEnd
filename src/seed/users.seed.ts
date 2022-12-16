import { users } from "../data/usersData";
import { UserModel } from "../db";

export const userSeed = async () => {
  const usersAll = await UserModel.findAll();

  try {
    !usersAll.length
      ? await UserModel.bulkCreate(
          users.map((e) => {
            return {
              firstName: e.name,
              lastName: e.lastName,
              fullName: `${e.name} ${e.lastName}`,
              image: e.image,
              position: e.position,
            };
          }),
          console.log("Users created")
        )
      : console.log("User already created");
  } catch (error: any) {
    throw new Error(error);
  }
};
