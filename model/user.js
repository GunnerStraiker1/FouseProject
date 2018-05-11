var mongoose = require("mongoose");
mongoose.connect("mongodb://root:12345@ds159129.mlab.com:59129/venta-casas");
var Schema = mongoose.Schema;
var userSchemaJSON = {
	email: String,
	password: String
};

var user_Schema = new Schema(userSchemaJSON);
var User = mongoose.model("User",user_Schema);



module.exports.User = User;
