
function sendHTML(nombrePagina, res) {
	var fs = require("fs");
	fs.readFile(nombrePagina+".html", (err,html) => {
		res.writeHead(200, {"Content-Type":"text/html"});
		res.write(html);
		res.end();
	});
}

module.exports.sendHTML = sendHTML;