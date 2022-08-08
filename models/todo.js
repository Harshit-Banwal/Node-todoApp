const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({

    title:{
        type: String,
        require: true
    },
    description:{
        type: String,
        require: true
    }
});

module.exports = new mongoose.model("todolists", TodoSchema);