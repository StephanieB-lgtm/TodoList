//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();


var items = ["Buy food", "Cook food", "Eat food"];
var workItems = [];


app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));




app.get("/", function(req, res){
  var today = date.getDate()
  res.render("list", {listTitle: today, newListItems: items, });

});





app.post("/", function(req, res){
  var item = req.body.todo;

  if (req.body.list === "Work"){
    workItems.push(item);
    res.redirect("/work");
  }else {
    items.push(item);
    res.redirect("/");
  }
});

app.get("/work", function(req,res){
  var today = date.getDate()
  res.render("list", {listTitle: "Work List", newListItems: workItems});
});




app.listen(3000, function(){
  console.log("Server is up and running");

});
