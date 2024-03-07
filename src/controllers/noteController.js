import { Note } from "../models/noteModel.js";

// Create a new note
export const createNote = async (req, res) => {
  try {
    if (!req.body.title || !req.body.content) {
      return res.status(400).send({
        message: "Send all required fields: title, content.",
      });
    }
    const newNote = {
      title: req.body.title,
      content: req.body.content,
    };

    const note = await Note.create(newNote);

    return res.status(201).send("Note created successfully. " + note);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};

// Get all the existing notes
export const getNotes = async (req, res) => {
  try {
    const notes = await Note.find({});

    return res.status(200).json({
      count: notes.length,
      data: notes,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};

// Get an existing note by id
export const getNoteById = async (req, res) => {
  try {
    const { id } = req.params;

    const note = await Note.findById(id);

    return res.status(200).json(note);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};

// Update an existing note by id
export const updateNoteById = async (req, res) => {
  try {
    if (!req.body.title || !req.body.content) {
      return res.status(400).send({
        message: "Send all required fields: title, content.",
      });
    }

    const { id } = req.params;

    const result = await Note.findByIdAndUpdate(id, req.body);

    if (!result) {
      return res.status(404).json({ message: "Note not found" });
    }

    return res.status(200).send({ message: "Note updated successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};

// Delete an existing note by id
export const deleteNoteById = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await Note.findByIdAndDelete(id);

    if (!result) {
      return res.status(404).json({ message: "Note not found" });
    }

    return res.status(200).send({ message: "Note deleted successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};
