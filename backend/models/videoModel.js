const mongoose = require('../connection');

const schema = new mongoose.Schema({
    user: { type: mongoose.Types.ObjectId, ref="Users" },
    title: String,
    thumbnail: String,
    file: String,
    public: Boolean,
    shared: [{ type: mongoose.Types.ObjectId, ref="Users" }],
    created: Date,
})


const model = mongoose.model('Videos', schema);

module.exports = model;
