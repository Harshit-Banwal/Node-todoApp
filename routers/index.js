const router = require("express").Router();
const todo = require("../models/todo");

router.get("/", async(req, res)=>{
    const allTodo = await todo.find(); 
    res.render("index", {todo: allTodo});
});

module.exports = router;