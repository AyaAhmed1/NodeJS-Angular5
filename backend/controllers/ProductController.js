'use strict';
var Article = require('../models/Article')
var Product = require('../models/Product')


exports.list_all = function (req, res) {
    Product.find({}).populate('articles').exec(function (err, products) {
        if (err)
            res.json("error");
        res.json(products);
    });
};

exports.insert = function (req, res) {
    if (req.body.articles) {
        var new_product = new Product({
            name: req.body.name,
            number: req.body.number,
            articles: req.body.articles.split(',')
        })
    }
    else {
        var new_product = new Product({
            name: req.body.name,
            number: req.body.number,
        })
    }
    new_product.save(function (err, product) {
        if (err)
            res.json(err);
        if (product)
            res.json("success");
    });
};

exports.edit = function (req, res) {
    Product.findById(req.params.productId).populate('articles').exec(function (err, product) {
        if (err)
            res.json("error");
        res.json(product);
    });
};


exports.update = function (req, res) {
    if (req.body.articles) {
        Product.update({ _id: req.params.productId },
            {
                name: req.body.name,
                number: req.body.number,
                articles: req.body.articles.split(',')
            }, function (err, product) {
                if (err)
                    res.json("error")
                if (product)
                    res.json("success")
            })
    }
    else {
        Product.update({ _id: req.params.productId },
            {
                name: req.body.name,
                number: req.body.number,
            }, function (err, product) {
                if (err)
                    res.json("error")
                if (product)
                    res.json("success")
            })
    }
}
exports.delete = function (req, res) {
    Product.findById(req.params.productId, function (err, product) {
        Product.remove({
            _id: req.params.productId
        }, function (err, product) {
            if (err)
                res.json("error");
            if (product)
                res.json("success");
        });
    })
}
exports.show = function (req, res) {
    Product.findById(req.params.productId).populate('articles').exec(function (err, product) {
        if (err)
            res.json("error");
        res.json(product);
    });
};