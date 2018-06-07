'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
    number: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    articles: [{ type: Schema.Types.ObjectId, ref: 'Article' }],
}, { versionKey: false })

module.exports = mongoose.model('Product', ProductSchema);