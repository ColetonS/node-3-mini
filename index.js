require('dotenv').config()
const express = require("express");
const massive = require('massive')

const app = express();

const { SERVER_PORT, CONNECTION_STRING } = process.env;

massive(CONNECTION_STRING).then(dbInstance => app.set('db', dbInstance)).catch(err => console.log(err))

// dbInstance.new_planes()
//   .then(planes => console.log(planes))
//   .catch(err => console.log(err))

app.use(express.json());


app.listen(SERVER_PORT, () => {
  console.log(`Server listening on port ${SERVER_PORT}`);
});
