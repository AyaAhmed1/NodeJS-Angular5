var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser')

var indexRouter = require('./routes/index');
var ArticlesRouter = require('./routes/ArticleRoutes');
var ProductsRouter = require('./routes/ProductRoutes');


var app = express();
app.use(function(req,res,next){
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Methods","OPTIONS,GET,POST,PUT,DELETE")
    res.setHeader("Access-Control-Allow-Headers","Content-Type")
    res.setHeader("Access-Control-Allow-Credentials",true)
    res.setHeader('Access-Control-Allow-Headers', "X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Accept-Encoding");
    res.setHeader( 'Access-Control-Max-Age' , 3600)
    res.setHeader('Access-Control-Expose-Headers' ,'X-Pagination-Current-Page');
    next()
})
// MONGOOSE Connection
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/modesotask');
mongoose.connection.once('open', () => {
    console.log('connected to Mongoo data base :modesotask ')
})
mongoose.connection.on('error', (err) => {
    console.log('connescted to mongoo error ', err)
})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

app.use('/', indexRouter);
app.use('/articles', ArticlesRouter)
app.use('/products', ProductsRouter )

module.exports = app;
