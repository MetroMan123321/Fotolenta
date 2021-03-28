let express = require("express");
let vjm = require ("vue-jwt-mongo");
let multer = require("multer");
let Mclient = require("mongodb").MongoClient;
let url = "mongodb://localhost", dbName = "photofeed";

let app = express();

function getKey() {
	return "6jNb9UVm7R48fBHyJIvOSNwDCx8zGGgIn1xNNKdsmKDBi0oyDZIpOYbtd7S1iYk";
}

let vjmServer = vjm.Server({
	mongoUrl: url + "/" + dbName,
	jwtSecret: getKey()
});

app.use(express.static("../client"));

Mclient.connect(url, function(err, client){
	database = client.db(dbName);
	app.listen(8080);
})