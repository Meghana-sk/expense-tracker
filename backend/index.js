const express = require('express');
const cors = require('cors');
const { db } = require('./db/db');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT;

//middlewares
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello world');
});
const server = () => {
  db();
  //   console.log('listening to port', PORT);
  app.listen(PORT, () => {
    console.log('listening to port:', PORT);
  });
};

server();
