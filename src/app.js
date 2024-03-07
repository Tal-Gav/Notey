import express from "express";
import cors from "cors";
import routes from "./routes/index.js";

const app = express();

// Middleware for parsing request body
app.use(express.json());

// Option 1: Allow All Origins with Default of cors(*)
app.use(cors());

// Use the app router
app.use("/", routes);

export default app;
