const express    = require('express');
const mongoose   = require('mongoose');
const app        = express();
const portNumber = 3000;
const sourceDir  = 'dist';
const User       = require('./models/user');
const bodyParser = require('body-parser');
const url        = 'mongodb://localhost/test';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(url);

const db = mongoose.connection;

db.on('error', function (err) {
    console.log('connection error', err);
});

db.once('open', function () {
    console.log('Connected to Database');
});

app.use(express.static(sourceDir));

app.post('/add', function (req,res) {
    new User({
        name: req.body.name,
        age: req.body.age
    }).save()
        .then(user => {
            res.json(user);
        })
        .catch(err => {
            res.status(400).send("Unable to save to database");
        });
});

app.get('/view', function (req,res) {
    User.find()
        .then(persons => {
            res.json(persons);
        })
        .catch(err => {
            res.send("Error");
        });
});

app.listen(portNumber, () => {
  console.log(`Express web server started: http://localhost:${portNumber}`);
  console.log(`Serving content from /${sourceDir}/`);
});
