const mongoose = require('../connection');
const Schema = mongoose.Schema;

const schema = new Schema({
    user: { type: mongoose.Types.ObjectId, ref="Users" },
    created: Date,
})


const model = mongoose.model('Chat', schema);
module.exports = model;