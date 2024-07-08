import backendApp from "./src/index.js";
import http from "http";
import mongoose from "mongoose";
import "dotenv/config";

mongoose.connect(process.env.MONGODB_URL).catch((error) => {
  console.log(error);
});

const server = http.createServer(backendApp);
mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  server.listen(process.env.PORT, () =>
    console.log(`Server running on port ${process.env.PORT}`)
  );
});

mongoose.connection.on("error", (err) => {
  console.log(err);
});
