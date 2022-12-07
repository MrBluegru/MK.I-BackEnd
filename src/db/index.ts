import { dbConfig } from "./config";
import { Test1 } from "../models/Test1";
import { Test11 } from "../models/Test11";

const test1Model: any = Test1(dbConfig);
const test2Model: any = Test11(dbConfig);

test1Model.belongsToMany(test2Model, { through: "test1Test11" });
test2Model.belongsToMany(test1Model, { through: "test1Test11" });

export const syncDB = () => dbConfig.sync({ force: true });

export { test1Model, test2Model };
