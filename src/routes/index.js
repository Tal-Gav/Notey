import express from "express";
import accountRouter from "./account.route.js";
import notesRouter from "./notes.route.js";

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
