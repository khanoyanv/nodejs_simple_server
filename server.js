// import express from 'express';
async function connectToDb() {
    await client.connect();
}

const express = require("express");
const {MongoClient} = require('mongodb');
const url = ('mongodb://localhost:27017');

const app = express();
const client = new MongoClient(url);

connectToDb();
let db = client.db('mydb');
let users = db.collection('users');

users.insertOne({name: 'Vahe', age: 22});

app.listen(8081);

app.get('/users', function (req, res) {
    let user = findUser();
    console.log(user);
    res.send(user);
});

function findUser() {
    let user = users.findOne({name: "Vahe"});

    return user;
}
