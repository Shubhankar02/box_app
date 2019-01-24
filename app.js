const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const ejs = require('ejs');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/box_app',{useNewUrlParser: true});
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", ejs);
app.use(express.static(__dirname + '/public'));


// Show all files
app.get('/', (req, res) => {
  res.send('This is the home page');
});

// view the one file
app.get('/:id', (req,res) => {
  res.send('This is the view file page')
})

// Post new file
app.post('/', (req, res) => {
  res.redirect('/');
})

// Delete the file
app.delete('/:id', (req, res) => {
  res.redirect('/');
})

app.listen(3000, (err) => {
  console.log(err);
});
