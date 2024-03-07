import express from "express";
import accountRouter from "./accountRoute.js";
import notesRouter from "./notesRoute.js";

const router = express.Router();

const routes = [
  {
    name: "/accounts",
    router: accountRouter,
  },
  {
    name: "/notes",
    router: notesRouter,
  },
];

routes.forEach((value) => {
  router.use(value.name, value.router);
});

export default router;
