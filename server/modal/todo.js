const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
    description : { type: String,required: true},
    done : { type: Boolean, required: false}
});

module.exports = mongoose.model('Todo', TodoSchema);