import express from "express";
import cors from "cors";
import routes from "./routes/index.js";
import cookieParser from "cookie-parser";

const app = express();

// Middleware for parsing request body
app.use(express.json());

// Option 1: Allow All Origins with Default of cors(*)
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["POST", "PUT", "GET", "OPTIONS", "HEAD"],
    credentials: true,
  })
);

app.use(cookieParser());

// Use the app router
app.use("/", routes);

export default app;
