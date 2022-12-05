import express, { Application } from "express";
import morgan from "morgan";
import routes from "./routes/index";

const server: Application = express();

server.use(morgan("dev"));
server.use("/", routes);

export default server;
