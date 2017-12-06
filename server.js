var express = require('express')
var app = express();
var bodyParser = require('body-parser')

var port = process.env.PORT || 8080;

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));
//
// var MongoClient = require('mongodb').MongoClient
// , assert = require('assert');
// var url = 'mongodb://jacksharkey:sharkey@ds123556.mlab.com:23556/internship';
//
// var name;
// var id;
// var email;
//
// //recieve info from google on signed in user
// app.post('/login', function(req,res){
//    email = req.body.email
//    id = req.body.id
//    name = req.body.name
//
//   MongoClient.connect(url, function(err, db) {
//     assert.equal(null, err);
//     console.log("Connected successfully to server");
//     findDocuments(db)
//   });
//
//   res.sendStatus(200);
//
// })
//
//
//
// var insertDocuments = function(db, callback) {
//   // Get the documents collection and determine if email is a students.westportps or not
//   var locationOfAt = email.indexOf("@")
//   var checkEmail = email.substring((locationOfAt + 1), (locationOfAt + 9))
//   if (checkEmail == "students") {
//     var collection = db.collection('students');
//   } else if (checkEmail == "westport") {
//     var collection = db.collection('staff');
//   } else {
//     //not westport
//     var collection = db.collection('other');
//   }
//
//   // Insert some documents
//   collection.insertOne(
//     {name : name, email: email, id: id}
//     , function(err, result) {
//       assert.equal(err, null);
//       console.log("Inserted a document into the restaurants collection.");
//       callback();
//     });
// }
//
//
// var findDocuments = function(db, callback) {
//   // Get the documents collection
//   var locationOfAt = email.indexOf("@")
//   var checkEmail = email.substring((locationOfAt + 1), (locationOfAt + 9))
//   if (checkEmail == "students") {
//     var collection = db.collection('students');
//   } else if (checkEmail == "westport") {
//     var collection = db.collection('staff');
//   } else {
//     //not westport
//     var collection = db.collection('other');
//   }
//   console.log("hi")
//     // Find some documents
//     //check if the id of the email is already in the database
//     collection.find({'id': id}).toArray(function(err, docs) {
//      assert.equal(err, null);
//     //if its not there, add it, otherwise close the db
//     if(docs.length == 0) {
//       console.log("new user")
//       insertDocuments(db, function() {
//         db.close
//       });
//     } else {
//       console.log("user exists")
//       db.close()
//     }
//
// })
// }



// create our app
app.use(express.static('public'))


app.listen(port, function() {
    console.log('Port:' + port);
  });
