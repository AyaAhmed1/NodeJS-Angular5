'use strict';
var Article = require('../models/Article')
var product = require('../models/Product')


exports.list_all = function (req, res) {
    Article.find({},function (err, articles) {
        if (err)
            res.json("error");
        res.json(articles);
    });
};

exports.insert = function (req, res) {
        var new_article = new Article(req.body);
        new_article.save(function (err, article) {
            if (err)
            res.json("error");
            else{
              //  res.json("success")
              res.json(article)
            }
        })
 }

exports.edit = function (req, res) {
    Article.findById(req.params.articleId,function (err, article) {
        if (err)
            res.json("error");
        res.json(article);
    });
};

exports.update = function (req, res) {
    Article.findOneAndUpdate({ _id: req.params.articleId }, req.body, { new: true }, function (err, article) {
        if (err)
            res.json("error");
        res.json("success");
    });
};

exports.delete = function (req, res) {
    Article.remove({
        _id: req.params.articleId
    }, function (err, article) {
        if (err)
            res.json("error");
        res.json("success");
    });
};
exports.show = function (req, res) {
    Article.findById(req.params.articleId,function (err, article) {
        if (err)
            res.json("error");
        res.json(article);
    });
};
