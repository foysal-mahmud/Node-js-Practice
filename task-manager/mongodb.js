// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

// const id = new ObjectID();
// console.log(id);
// console.log(id.getTimestamp());

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect database!!!!!");
    }

    // console.log("Connected Correctly!!");

    const db = client.db(databaseName);

    // ----- end of connection setting ------------

    // -------- DELETE DATA ---------------
    // db.collection("users")
    //   .deleteMany({
    //     age: 26,
    //   })
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    db.collection("users")
      .deleteOne({
        name: "Spyderr",
      })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });

    // -------- UPDATE DATA ---------------
    // db.collection("users")
    //   .updateOne(
    //     {
    //       _id: new ObjectID("61a07840263c6927243ce38b"),
    //     },
    //     {
    //       $set: {
    //         name: "Spyderr",
    //       },
    //     }
    //   )
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    db.collection("users")
      .updateMany(
        {
          age: 26,
        },
        {
          $set: {
            age: 23,
          },
        }
      )
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });

    // -------- READ DATA -----------------
    // db.collection("users").findOne({ name: "Sadia" }, (error, user) => {
    //   if (error) {
    //     return console.log("unable to fetch");
    //   }

    //   console.log(user);
    // });

    // db.collection("users")
    //   .find({ age: 26 })
    //   .toArray((error, users) => {
    //     console.log(users);
    //   });

    // db.collection("users")
    //   .find({ age: 26 })
    //   .count((error, count) => {
    //     console.log(count);
    //   });

    // ----- INSERT DATA ------------------
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

    // db.collection("users").insertMany(
    //   [
    //     {
    //       name: "foysal",
    //       age: 26,
    //     },
    //     {
    //       name: "Mahmud",
    //       age: 25,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert user");
    //     }
    //     console.log(result.ops);
    //   }
    // );

    // db.collection("users").insertOne(
    //   {
    //     _id: id,
    //     name: "Sadia",
    //     age: 20,
    //   },
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert user");
    //     }

    //     console.log(result.ops);
    //   }
    // );
  }
);
