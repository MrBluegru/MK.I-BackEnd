import { dbConfig } from "./config";
import { User } from "../models/User";
import { Agent } from "../models/Agent";

const UserModel: any = User(dbConfig);
const AgentModel: any = Agent(dbConfig);

UserModel.belongsToMany(AgentModel, { through: "User_Agent" });
AgentModel.hasMany(UserModel);

export const syncDB = () => dbConfig.sync({ force: true });

export { UserModel, AgentModel };
