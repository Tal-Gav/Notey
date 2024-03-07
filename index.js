import backendApp from "./src/index.js";
import http from "http";
import mongoose from "mongoose";
import "dotenv/config";

mongoose.connect(process.env.MONGODB_URL).catch((error) => {
  console.log(error);
});

const server = http.createServer(backendApp);
server.listen(process.env.PORT);

console.log(`server is up at port: ${process.env.PORT}`);
