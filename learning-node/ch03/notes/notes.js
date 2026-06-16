"use strict";

import { readFileSync, writeFileSync } from "node:fs";

export const addNote = (title, body) => {
  const notes = fetchNotes();
  const note = {
    title,
    body,
  };

  if (!title?.trim() || !body?.trim()) {
    console.log("Title and body must not be empty");
  }

  if (notes.length === 0) {
    notes.push(note);
    saveNotes(notes);
  } else if (removeNotesDuplicates(notes, note.title)) {
    notes.push(note);
    saveNotes(notes);
  } else {
    console.log("Note already exists");
  }
};

export const getAll = () => {
  fetchNotes().forEach((note) =>
    console.log(`\nTitle: ${note.title}\nBody: ${note.body}\n`),
  );
};

export const removeNote = (title) => {
  const notes = fetchNotes();
  if (notes.length === 0) {
    console.log("Empty notes list");
    return;
  }
  const filteredNotes = notes.filter((note) => note.title !== title);
  if (notes.length !== filteredNotes.length) {
    saveNotes(filteredNotes);
  } else {
    console.log("Note not found");
  }
};

export const getNote = (title) => {
  const notes = fetchNotes();
  if (notes.length === 0) {
    console.log("Empty notes list");
    return;
  }
  const note = notes.find((note) => note.title === title);
  if (note) {
    console.log(`\nTitle: ${note.title}\nBody: ${note.body}\n`);
  } else {
    console.log("Note not found");
  }
};

const fetchNotes = () => {
  try {
    const data = readFileSync("note-data.json");
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
};

const removeNotesDuplicates = (notes, title) => {
  return notes.find((note) => note.title === title) === undefined;
};

const saveNotes = (notes) => {
  writeFileSync("note-data.json", JSON.stringify(notes, null, 2));
};
