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
    return;
  }

  if (notes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    logNote(title, body, true);
  } else if (removeNotesDuplicates(notes, note.title)) {
    notes.push(note);
    saveNotes(notes);
    logNote(title, body, true);
  } else {
    console.log("Note already exists");
    return;
  }
};

export const getAll = () => {
  const notes = fetcher();
  if (!notes) return;
  console.log(`Printing ${notes.length} note(s):`);
  notes.forEach((note) => logNote(note.title, note.body));
};

export const removeNote = (title) => {
  const notes = fetcher();
  if (!notes) return;
  const filteredNotes = notes.filter((note) => note.title !== title);
  if (notes.length !== filteredNotes.length) {
    saveNotes(filteredNotes);
    console.log("Note removed successfully.");
  } else {
    console.log("Note not found");
  }
};

export const getNote = (title) => {
  const notes = fetcher();
  if (!notes) return;
  const note = notes.find((note) => note.title === title);
  if (note) {
    logNote(note.title, note.body);
  } else {
    console.log("Note not found");
  }
};

export const logNote = (title, body, status = false) => {
  status === false ? "" : console.log("Note added successfully.");
  console.log("---");
  console.log(`\nTitle: ${title}\nBody: ${body}\n`);
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

const fetcher = () => {
  const notes = fetchNotes();
  if (notes.length === 0) {
    console.log("Empty notes list");
    return;
  } else {
    return notes;
  }
};
