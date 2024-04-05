import express from "express";
import * as noteController from "../controllers/note.controller.js";

const router = express.Router();

router.post("/", noteController.createNote);
router.get("/", noteController.getNotes);
router.get("/:id", noteController.getNoteById);
router.put("/:id", noteController.updateNoteById);
router.delete("/:id", noteController.deleteNoteById);

export default router;
