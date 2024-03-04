import "dotenv-expand/config";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import notesRoute from "./routes/notesRoute.js";
import accountRoute from "./routes/accountRoute.js";

const PORT = process.env.PORT;
const mongodbURL = process.env.MONGODB_URL;
const app = express();

// Middleware for parsing request body
app.use(express.json());

// Middleware for handling CORS POLICY
// Option 1: Allow All Origins with Default of cors(*)
app.use(cors());
// Option 2: Allow Custom Origins
// app.use(
//   cors({
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type'],
//   })
// );

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("Welcome To MERN Stack Tutorial");
});

app.use("/accounts", accountRoute);
app.use("/notes", notesRoute);

mongoose
  .connect(mongodbURL)
  .then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })

  .catch((error) => {
    console.log(error);
  });
