"use strict";

export const addNote = (title, body) => {
  console.log("Adding note", title, body);
};

export const getAll = () => {
  console.log("Getting all notes");
};

export const getNote = (title) => {
  console.log("Getting note", title);
};

export const removeNote = (title) => {
  console.log("Removing note", title);
};
