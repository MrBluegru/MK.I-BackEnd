import { dbConfig } from "./config";
import { User } from "../models/User";
import { Agent } from "../models/Agent";
import { Fugitive } from "../models/Fugitive";
import { Missing } from "../models/Missing";

const UserModel: any = User(dbConfig);
const AgentModel: any = Agent(dbConfig);
const FugitiveModel: any = Fugitive(dbConfig);
const MissingModel: any = Missing(dbConfig);

UserModel.belongsToMany(AgentModel, { through: "User_Agent" });
AgentModel.hasMany(UserModel);
UserModel.belongsToMany(FugitiveModel, { through: "User_Fugitive" });
FugitiveModel.hasMany(UserModel);
UserModel.belongsToMany(MissingModel, { through: "User_Missing" });
MissingModel.hasMany(UserModel);

export const syncDB = () => dbConfig.sync({ force: true });

export { UserModel, AgentModel, FugitiveModel, MissingModel };
