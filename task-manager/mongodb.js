const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect database!!!!!");
    }

    // console.log("Connected Correctly!!");

    const db = client.db(databaseName);

    // db.collection("users").insertOne(
    //   {
    //     name: "Foysal Mahmud",
    //     age: 26,
    //   },
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert user");
    //     }

    //     console.log(result.ops);
    //   }
    // );

    db.collection("users").insertMany(
      [
        {
          name: "foysal",
          age: 26,
        },
        {
          name: "Mahmud",
          age: 25,
        },
      ],
      (error, result) => {
        if (error) {
          return console.log("Unable to insert user");
        }
        console.log(result.ops);
      }
    );
  }
);
