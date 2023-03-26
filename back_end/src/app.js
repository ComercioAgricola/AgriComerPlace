const express = require('express');
const app = express();

//Settings

app.set('poort',process.env.PORT || 4000);
  

//middlewares

//Routes

module.exports = app;