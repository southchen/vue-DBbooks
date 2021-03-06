const express = require('express');
const axios = require('axios');
const app = express();
require('dotenv').config();
const EventSource = require('eventsource');
const instance = axios.create({
  headers: { Cookie: process.env.DB_COOKIE },
  method: 'GET',
});

app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
  res.header('X-Powered-By', ' 3.2.1');
  res.header('Content-Type', 'application/json;charset=utf-8');

  next();
});
// console.log(process.env.DB_APIKEY);
const queryBook = async (query) => {
  let result = await instance({
    url: encodeURI(
      `https://api.douban.com/v2/book/search?q=${query}&apikey=${process.env.DB_APIKEY}`
    ),
  });
  return result.data;
};

var config = {
  method: 'get',
  url: 'https://book.douban.com/j/home/review_recommend?user_id=4266786',
  headers: {
    Cookie: 'bid=BNqIzu1syCY',
  },
};

app.get('/new', (req, res) => {
  axios(config)
    .then(function (response) {
      let result = response.data.result;
      console.log(result);
      res.json(result);
    })
    .catch(function (error) {
      console.log(error);
    });
});

app.get('/', async (req, res) => {
  //   console.log(req.query);
  let query = req.query.search;
  let result = await queryBook(query);
  res.json(result);
});
app.listen(5000, () => {
  console.log('server listening on port 5000');
});
