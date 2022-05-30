var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Mini Messageboard", messages });
});

router.get('/new', (req, res) => {
  res.render('form');
});

router.post('/new', (req, res) => {
  const messageObj = {
    text: req.body["message-text"],
    user: req.body["username"],
    added: new Date()
  }
  messages.push(messageObj);
  res.redirect('/');
});

module.exports = router;
