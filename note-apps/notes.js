const fs = require("fs");
const chalk = require("chalk");

const addNote = (title, body) => {
  const notes = loadNotes();
  //const duplicateNotes = notes.filter((note) => note.title === title);
  const duplicateNote = notes.find((note) => note.title === title);

  // debugger;

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.green.inverse("New Note added!!!!"));
  } else {
    console.log(chalk.red.inverse("Note title taken......."));
  }

  //   console.log(notes);
};

const removeNote = (title) => {
  const notes = loadNotes();
  const notesToKeep = notes.filter((note) => note.title != title);

  if (notesToKeep.length === notes.length) {
    console.log(chalk.red.inverse("No note Found!"));
  } else {
    console.log(chalk.green.inverse("Note Removed!"));
    saveNotes(notesToKeep);
  }
};

const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.yellow("Your Notes:"));

  notes.forEach((note) => {
    console.log(note.title);
  });
};

const readNote = (title) => {
  const notes = loadNotes();
  const note = notes.find((note) => note.title === title);

  if (note) {
    console.log(chalk.green(note.title));
    console.log(chalk.white(note.body));
  } else {
    console.log(chalk.red("Note not found!"));
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote,
};
