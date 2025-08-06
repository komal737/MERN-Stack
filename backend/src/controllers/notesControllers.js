import mongoose from 'mongoose';
import Note from '../models/Notes.js'; // ✅ Use capital 'N' if model is Note

// ✅ Get all notes
export async function getAllNote(req, res) {
  try {
    const notes = await Note.find().sort({ createdAt: -1 });
    res.status(200).json(notes);
  } catch (error) {
    console.log("Error in getAllNote Controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

// ✅ Get note by ID
export async function getNoteById(req, res) {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }
    res.status(200).json(note);
  } catch (error) {
    console.log("Error in getNoteById Controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

// ✅ Create note
export async function createNote(req, res) {
  try {
    const { title, content } = req.body;
    const newNote = new Note({ title, content });
    await newNote.save();
    res.status(201).json({ message: "Note created successfully" });
  } catch (error) {
    console.log("Error in createNote Controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

// ✅ Update note
export async function updateNote(req, res) {
  try {
    const { title, content } = req.body;
    const updatedNote = await Note.findByIdAndUpdate(
      req.params.id,
      { title, content },
      { new: true } // ✅ Return the updated document
    );
    if (!updatedNote) {
      return res.status(404).json({ message: "Note not found for updating" });
    }
    res.status(200).json(updatedNote);
  } catch (error) {
    console.log("Error in updateNote Controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

// ✅ Delete note
export async function deleteNote(req, res) {
  try {
    const deletedNote = await Note.findByIdAndDelete(req.params.id);
    if (!deletedNote) {
      return res.status(404).json({ message: "Note not found for deletion" });
    }
    res.status(200).json({ message: "Note deleted successfully" });
  } catch (error) {
    console.log("Error in deleteNote Controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
