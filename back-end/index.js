const cors = require("cors");
const { response } = require("express");
const express = require("express");
const http = require("http");
const connectDB = require("./config/db.js");
const app = express();
const port = 8000;

app.get("/", (request, response) => {
  response.send("Todo list backend");
});
app.get("/test", (request, response) => {
  response.send("This is test endpoint");
});

const corsOptions = {
  origin: "http://localhost:5000",
  credentials: true,
  optionSuccessStatus: 200,
};
connectDB();
app.use(cors(corsOptions));
app.use(express.json());

app.listen(port, () => {
  console.log(`Server is running at http:localhost:${port}/`);
});
