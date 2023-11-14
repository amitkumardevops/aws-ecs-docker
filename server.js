const { URLRoutes } = require("./URLRoutes");
const dotenv = require('dotenv');
dotenv.config();
const express = require("express");
const app = express();
const {
  serverRoutes: {
    productsList
  },
} = URLRoutes;

app.get(productsList, (req,res)=> {
  
});
