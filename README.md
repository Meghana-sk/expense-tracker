# expense-tracker

## create two folders frontend and backend

## cd backend

`npm init`

`npm install express mongoose cors nodemon`

## create folders db, models, controllers, routes

## create an entry point file which is index.js

## npm i dotenv

```
// index.js
const express = require('express');
const cors = require('cors');
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
  //   console.log('listening to port', PORT);
  app.listen(PORT, () => {
    console.log('listening to port:', PORT);
  });
};

server();

```

### open postman with http://localhost:5000 and when you send req, you receive Hello world
