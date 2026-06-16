"use strict";

import { readFileSync, writeFileSync } from "node:fs";

export const addNote = (title, body) => {
  const notes = fetchNotes();
  const note = {
    title,
    body,
  };

  if (notes.length === 0) {
    notes.push(note);
    writeFileSync("note-data.json", JSON.stringify(notes));
  } else if (notesDuplicates(notes, note.title)) {
    notes.push(note);
    writeFileSync("note-data.json", JSON.stringify(notes));
  } else {
    console.log("Note already exists");
  }
};

const notesDuplicates = (notes, title) => {
  return notes.find((note) => note.title === title) === undefined;
};

export const getAll = () => {
  fetchNotes().forEach((note) =>
    console.log(`\nTitle: ${note.title}\nBody: ${note.body}\n`),
  );
};

const fetchNotes = () => {
  try {
    const data = readFileSync("note-data.json");
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
};
