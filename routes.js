var express = require("express");

var router = express.Router();

router.get("/", function(req, res){
    res.render("index");
    //console.log("Hello anshul I am on the start page here");
});

router.get("/login", function(req, res){
    res.render("login");
});

router.get("/dashboard", function(req, res){
    res.render("dashboard");
});

router.get("/footer", function(req, res){
    res.render("_footer");
});

router.get("/about", function(req, res){
    res.render("about");
});

module.exports = router;