import "dotenv";
import server from "./app";
import { syncDB } from "./db";
const { PORT } = process.env;

syncDB()
  .then(() => console.log("Database sync"))
  .catch((e) => console.log("Error on database syncing" + e));

server.listen(PORT, () => {
  console.log(`Listening at port ${PORT}`);
});
