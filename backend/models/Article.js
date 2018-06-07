'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
    number: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    type: { type: String, required: true, enum: ['Raw Material', 'Semi Processed'] },
})

module.exports = mongoose.model('Article', ArticleSchema);
