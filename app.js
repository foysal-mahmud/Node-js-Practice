const chalk = require("chalk");
const yargs = require("yargs");

const notes = require("./notes.js");

// Customize yargs version
yargs.version("1.10.1");

//Create add command
yargs.command({
  command: "add",
  describe: "Add a new Note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note Body",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.addNote(argv.title, argv.body);
  },
});

//Create remove command
yargs.command({
  command: "remove",
  describe: "Remove a Note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.removeNote(argv.title);
  },
});

//Create list command
yargs.command({
  command: "list",
  describe: "listing Note",
  handler: function () {
    notes.listNotes();
  },
});

//Create read command
yargs.command({
  command: "read",
  describe: "Read a Note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.readNote(argv.title);
  },
});

yargs.parse();
// console.log(yargs.argv);

// const command = process.argv[2];

// if (command === "add") {
//   console.log("Adding Notes");
// }

// console.log(chalk.green("Success!"));
// console.log(chalk.red.bgYellow.bold("ERROR!"));

// console.log(process.argv[2]);

// const validator = require("validator");

// console.log(validator.isEmail("foysal@example.com"));
// console.log(validator.isURL("https://www.fb.com"));

// const fs = require("fs");
// fs.writeFileSync("notes.txt", "This is foysal Mahmud");
// fs.appendFileSync("notes.txt", "\nThis is third line!!!");

// const name2 = require("./utils.js");

// const name1 = "Foysal";
// console.log(name1);

// // console.log(name2);

// const add = require("./utils.js");

// const sum = add(4, 7);
// console.log(sum);
