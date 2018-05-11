 'use strict'

var express = require("express"), 
	fs = require("fs"),
	send = require("./SendHtml.js"),
	bodyParser = require("body-parser"),
	mongoose = require("mongoose"),
	UserModel = require("./model/user.js").User;

var app = express();

app.set("view engine", "jade");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true})); // Para recibir parametros de formularios. Para usarlso se coloca req.body.nombreComponente
app.use(express.static('public'));

app.get("/",(req,res) => {
	send.sendHTML("index", res);
});


app.get("/Simulador",(req,res) => {
	send.sendHTML("SimuladorCasa_01/SimuladorCasa_1", res);
});

app.post("/registrarUsuario",(req,res) => {
	var user = new UserModel({email: req.body.email, password: req.body.pwd});
	user.save(() => {
		send.sendHTML("index", res);
	});
});

app.get("/Buscador",(req,res) => {
	send.sendHTML("vistas/Buscador", res);
});

 app.listen(8080);