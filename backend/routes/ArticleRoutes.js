var express = require('express');
var router = express.Router();
var Article = require('../models/Article')
var article_ctrl = require('../controllers/ArticlesController')


router.get('/', article_ctrl.list_all)
router.post('/', article_ctrl.insert)
router.get('/edit/:articleId', article_ctrl.edit)
router.put('/:articleId', article_ctrl.update)
router.delete('/:articleId', article_ctrl.delete)
router.get('/:articleId', article_ctrl.show)


module.exports = router;
