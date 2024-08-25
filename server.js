//import express from "express"
let express = require('express');
const app = express();

app.listen(8081);

app.get('/users', function (req, res) {
	console.log(req.header);
	res.send("You successfully got the list of users");
});

app.post('/posts', function (req, res) {
	console.log(req.header);
	res.send("You successfully got the list of posts");
});
