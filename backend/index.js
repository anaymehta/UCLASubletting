const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const assert = require('assert');

const bcrypt = require('bcrypt');
const saltRounds = 10;

const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;

const jwt = require('jsonwebtoken');
const dotenv = require("dotenv");

// get config vars
dotenv.config();

// access config var
console.log(process.env.TOKEN_SECRET);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//enable cross origin
app.use(cors())

const uri = "mongodb+srv://dbUser:o0UhevJddzhSfEEa@cluster0.lpucd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
var db;

client.connect(err => {
  db = client.db("sublettingDB")
  // perform actions on the collection object
});

function generateToken(identifier) {
  //Currently using email as unique identifier, perhaps switch to ObjId for more convinient indexing later
  return jwt.sign(identifier, process.env.TOKEN_SECRET); //No-expiry for testing purposes
}

app.post('/signUp', function (req, res) {
  //Missing validation of user not existing
  var users = db.collection('users');
  var plainPass = req.body.password; //Hash on client side in the future for better security
  var accessToken = generateToken(req.body.email)
  console.log(plainPass);
  createUserDoc().then(() => {
    hashPass().then((genHash) => {
      console.log("Email: " + req.body.email);
      console.log("genhash: " + genHash);
      users.updateOne({ "email": req.body.email }, { $set : { "password": genHash , "tok": accessToken}})
    }).then(() => {
      res.send(accessToken);
    })
  })

  async function hashPass() {
    return new Promise((resolve, reject) => {
      bcrypt.hash(plainPass, saltRounds, function(err, hash) {
        resolve(hash);
      });
    })
  }

  async function createUserDoc() {
    let userDoc = await users.insert({"email": req.body.email});
    return 0
  }

});


app.post('/signIn', function (req, res) {
   var users = db.collection('users');
   var accessToken;
   comparePass().then((result) => {
     if(result === false) {
       //password is didnt match / is wrong
       console.log("Wrong password");
       res.send("Wrong password")
     } else {
       console.log("correct password");
       res.send(accessToken)
     }
   })

   async function comparePass() {
     var userData = await users.find({"email": req.body.email}).toArray();
     return new Promise((resolve, reject) => {
       accessToken = userData[0].tok
       bcrypt.compare(req.body.password, userData[0].password, function(err, result) {
         if(err) {
           console.log(err);
         } else {
           console.log("bcrypt result: " + result);
           resolve(result);
         }
       });
     })
   }


})


app.post('/createListing', function (req, res) {
  //Need to associate listingDoc ObjID with User
  var listings = db.collection('listings');

  createListingDoc().then(() => {
      res.send("Listing Created");
    })

  async function createListingDoc() {
    let listingDoc = await listings.insert({"token": req.body.token, "author": req.body.author, "text": req.body.text, "beds": req.body.beds, "baths": req.body.baths, "sqft": req.body.sqft, "email": req.body.email, "phone": req.body.phone});
    return 0
  }

});

app.get('/getListings', function (req, res) {
  //Missing validation of user not existing
  var listings = db.collection('listings');
  returnAllListings()

  async function returnAllListings() {
    /*let listingDocs = await listings.find({});
    return listingDocs */
    listings.find({}).toArray(function (err, result) {
        if (err) {
            console.log(err);
            res.send("Error finding all listings. Check Server logs.")
        } else {
            console.log("Returning : " + result);
            res.send(result);
        }
    })
  }

});

app.get('/', function (req, res) {
  res.send('Hello World');
});

var port = process.env.PORT || 8080;

var server = app.listen(port, function () {
    console.log('Server running at http://127.0.0.1:' + port + '/');
});