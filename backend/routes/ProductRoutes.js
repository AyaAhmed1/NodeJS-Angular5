var express = require('express');
var router = express.Router();
var Product = require('../models/Product')
var product_ctrl = require('../controllers/ProductController')

router.get('/', product_ctrl.list_all)
router.post('/', product_ctrl.insert)
router.get('/edit/:productId', product_ctrl.edit)
router.put('/:productId', product_ctrl.update)
router.delete('/:productId', product_ctrl.delete)
router.get('/:productId', product_ctrl.show)

module.exports = router;