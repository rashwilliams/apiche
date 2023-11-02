const mongoose = require("mongoose");

const MONGO_URL = "mongodb://127.0.0.1:27017/blog-app";
const MONGO_URL2 =
  "mongodb+srv://smssolution:BxA45zj5BQ70CD6I@cluster0.3wo4h.mongodb.net/blog-app?retryWrites=true&w=majority";

const mongoConnect = async () => {
  mongoose
    .connect(MONGO_URL)
    .then(() => console.log("db connection is ready"))
    .catch((error) => console.log(error));
};

module.exports = mongoConnect;
