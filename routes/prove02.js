// Prove02
const express = require('express');
const router = express.Router();

const books = [];

router.get('/',(req, res, next) => {
    res.render('pages/prove02', { 
        title: 'Prove02', 
        path: '/prove02', // For pug, EJS 
    });
});

router.post('/book',(req, res, next) => {
  books.push({
    title: req.body.title,
    desc: req.body.description
  });
  res.render('pages/prove02P', { 
      title: 'Book Display', 
      path: '/prove02', // For pug, EJS 
      books: books,
  });
});

module.exports = router;