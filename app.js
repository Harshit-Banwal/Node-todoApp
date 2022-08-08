const express = require("express");
const app = express();
const port = 8000;
const hbs = require("hbs");
const path = require("path");
const mongoose = require("mongoose");

// db connection
const db = "mongodb+srv://harshit15:7404327059@cluster0.rv64fj5.mongodb.net/todoApp?retryWrites=true&w=majority";
mongoose.connect(db).then(()=>console.log("Connection successful")).catch((err)=>"Error in connection");

//partials path
const  partials_path = path.join(__dirname, "./views/partials")

app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "hbs");
hbs.registerPartials(partials_path)

app.use(require("./routers/index"));
app.use(require("./routers/todo"));

//Server listening
app.listen(port, ()=>console.log(`Server is listning on ${port}`));

