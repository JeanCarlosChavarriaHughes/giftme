// ============================================================================
// server.js Contains all the server instructives for the project
// ============================================================================

// ============================================================================
// Requirements Section
// ============================================================================
var express = require("express");
var app = express();
var middleware = require("/exports/middleware.js");
var bodyParser = require("body-parser"); //use body-parser
var _ = require("underscore"); //use to parse body req as json
var ip = require("ip");

// ===========================================================================
// Constant Parameters
// ===========================================================================
var PORT = process.env.PORT || 8181;
var INDEX_PAGE = "/public/index.html";

// ============================================================================
// Configuration of Static Resources
// ============================================================================
app.use("/public", express.static(__dirname + "/public"));
app.use("middleware.js", express.static(__dirname + "/exports/middleware.js"));
//source: http://stackoverflow.com/questions/10434001/static-files-with-express-js
//source: http://stackoverflow.com/questions/22202232/express-has-no-method-configure-error


// ==============================================================
// Define MiddleWare
// ==============================================================
app.use(middleware.logger);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

// ===================================================================
// Configure Routes
// ===================================================================

//Root of Web Application
app.get("/", function (req, res) {
  //get corresponds to GET HTTP request.
  console.log("ROOT Requested");
  res.status("200").end();
  //res.sendFile(__dirname + INDEX_PAGE);
});

// =============================================================================
// Starting the Server
// =============================================================================
console.dir(ip.address());

var server = app.listen(process.env.PORT || PORT, ip.address(), function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log("GiftMe app listening at http://%s:%s", host, port);
});
