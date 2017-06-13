var ghpages = require("gh-pages");
var rmdir = require("rmdir");
var path = require("path");

var dist = path.join(__dirname, "dist");

ghpages.publish(path.join(__dirname, "dist"));
