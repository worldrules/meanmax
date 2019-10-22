//Mongo DB Pass
//yLsuF6KhlP25wb1R

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.post("/api/posts", (req, res, next) => {
  const post = req.body;
  console.log(post);
  res.status(201).json({
    message: "Post added successfully"
   })
})

app.use('/api/posts', (req,res, next) => {
  const posts = [
    {
      id: "1a3s2d13s2ad",
      title: "First server-side post",
      content: "This is coming from the server"
    },
    {
      id: "1a3s2d13s2ad",
      title: "Second server-side post",
      content: "This is coming from the server!"
    }
  ];
  return res.status(200).json({
    message: 'Posts fetched succefully!',
    posts: posts
  });
});

module.exports = app;
