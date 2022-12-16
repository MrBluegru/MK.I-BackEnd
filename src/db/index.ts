import { dbConfig } from "./config";
import { User } from "../models/User";
import { Agent } from "../models/Agent";
import { Fugitive } from "../models/Fugitive";
import { Missing } from "../models/Missing";
import { Auth } from "../models/Auth";

const UserModel: any = User(dbConfig);
const AgentModel: any = Agent(dbConfig);
const FugitiveModel: any = Fugitive(dbConfig);
const MissingModel: any = Missing(dbConfig);
const AuthModel: any = Auth(dbConfig);

AgentModel.hasMany(UserModel);
FugitiveModel.hasMany(UserModel);
MissingModel.hasMany(UserModel);
UserModel.hasMany(AuthModel);

UserModel.belongsToMany(AgentModel, { through: "User_Agent" });
UserModel.belongsToMany(FugitiveModel, { through: "User_Fugitive" });
UserModel.belongsToMany(MissingModel, { through: "User_Missing" });

export const syncDB = () => dbConfig.sync({ force: true });

export { UserModel, AgentModel, FugitiveModel, MissingModel, AuthModel };
