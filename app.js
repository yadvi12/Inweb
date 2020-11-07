var express = require('express')
var bodyParser = require('body-parser')
var ejs = require('ejs')
var mongoose = require('mongoose')

var app = express()
var port = 3000|| process.env.port

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('public'))

app.set('view engine', 'ejs')

app.get('/', (req,res)=>{
   res.render('index', {page:'index'})
})
app.get('/index', (req,res)=>{
   res.render('index', {page:'index'})
})
app.get('/signup', (req,res)=>{
    res.render('signup', {page:'signup'})
 })
 app.get('/elab', (req,res)=>{
    res.render('elab', {page:'elab'})
 })
 app.get('/ppt', (req,res)=>{
    res.render('ppt', {page:'ppt'})
 })
 app.get('/library', (req,res)=>{
    res.render('library', {page:'library'})
 })
 app.get('/notes', (req,res)=>{
    res.render('notes', {page:'notes'})
 })
 app.get('/samplepaper', (req,res)=>{
    res.render('samplepaper', {page:'samplepaper'})
 })
 app.get('/contact', (req,res)=>{
   res.render('contact', {page:'contact'})
})

app.listen(port,(err)=>{
    if(err){console.log(err)}
    else{
    console.log("Server is running successfully")}
})