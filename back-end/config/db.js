const mongoose = require("mongoose");

const uri =
  "mongodb+srv://admin:n3stc0r3@my-database.zdcojhh.mongodb.net/?retryWrites=true&w=majority";

const connect = async () => {
  try {
    await mongoose.connect(uri);
    console.log("Successfully connected mongodb");
  } catch (err) {
    console.log(err);
  }
};

module.exports = connect;
