const router = require("express").Router();
const todo = require("../models/todo");

router.post("/todo", (req, res)=>{
    const {title, description} = req.body;

    const newTodo = new todo({title, description});

    newTodo.save()
    .then(()=>{
        console.log("saved");
        res.redirect("/");
    })
    .catch((err) => console.log(err));
})

.get("/delete/todo/:_id", (req,res)=>{
    const {_id} = req.params;

    todo.deleteOne({_id})
    .then(() =>{
        console.log("Deleted");
        res.redirect("/");
    })
    .catch((err)=>{
        console.log(err);
    })
})

module.exports = router;