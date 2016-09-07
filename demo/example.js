'use strict';

const MongoClient = require('mongodb').MongoClient;

MongoClient.connect("mongodb://localhost:27017/example", (err, db) => {
    if (err) {
        return console.dir(err);
    }

    let collection = db.collection('test');
    let docs = [
        {"first_name": "pepe", "last_name": "gomez", "username": "pgomez"},
        {"first_name": "juan", "last_name": "perez", "username": "jperez"}
    ];
    collection.insert(docs, {}, () => {
        process.exit();
    });

});