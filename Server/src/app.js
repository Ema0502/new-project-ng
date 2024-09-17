const express = require('express');
const cors = require("cors");
const app = express();
const corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
};

const router = require("./routes/index");

app.use(cors(corsOptions));
app.use(express.json());
app.use('/', router);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

module.exports = app;