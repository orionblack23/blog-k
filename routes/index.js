var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
const postRequest = require('../database/models/post');

mongoose.connect('mongodb://localhost/node-js-blog');

/* GET home page. */
router.get('/', function(req, res, next) {
  postRequest.find()
      .then(function(doc) {
        res.render('index', {
          items: doc
        });
      });
});

/* GET creatPost page */
router.get('/newPost', function(req, res, next) {
  res.render('createPost');
});

/* Post request from newPost form */
router.post('/posts/store', function(req, res, next) {
  var item = {
    title: req.body.title,
    description: req.body.description,
    content: req.body.content,
    username: req.body.username
  };
  var data = new postRequest(item);
  data.save();
  res.redirect('/');
});

/* GET about page */
router.get('/about', function(req, res, next) {
  res.render('about');
});

/* GET contact page */
router.get('/contact', function(req, res, next) {
  res.render('contact');
});

/* GET post page */
router.get('/post/:id', function(req, res, next) {
  console.log(req.params.id);
  postRequest.findById(req.params.id)
    .then(function(doc) {
      res.render('post', {
        items: doc
      });
    });
      
});


module.exports = router;
