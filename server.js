const express = require('express')
const hbs = require('hbs')
const fs = require('fs')

var app = express();
app.set('view engine','hbs')
hbs.registerPartials(__dirname+'/views/partial')

hbs.registerHelper('getCurrentYear',()=>{
    return 1396;
})

hbs.registerHelper('upperCase',(text)=>{
    return text.toUpperCase();
})

app.use((req,res,next)=>{
    console.log('url    : ',req.url);
    console.log('method : ',req.method);

    fs.appendFile('log.txt', ` ${ new Date() } >> ${req.url}  \n`  )
    
    next();
})

// app.use((req,res,next)=>{
    
//     if(req.url.indexOf('/home') !== -1 || req.url==='/main.css' || req.url==='/main.js'){
//        res.render('home.hbs',{pageTitle:'HOME PAGE',})     
//     }
//     else if(req.url.indexOf('/about') !== -1 || req.url==='/main.css' || req.url==='/main.js'){
//         res.render('about.hbs',{pageTitle:'ABOUT PAGE',})     
//     }
// })


app.get('/home',(req,res)=>{
    res.render('home.hbs',{
        pageTitle:'HOME PAGE',
    })
})
app.get('/about',(req,res)=>{
    res.render('about.hbs',{
        pageTitle:'ABOUT PAGE',
    })
})
app.get('/project',(req,res)=>{
    res.render('project.hbs',{
        pageTitle:'project PAGE',
    })
})


app.use(express.static(__dirname+'/public'))






/*


app.get('/',(req,res)=>{
    
    res.send('<h1>Hello express</h1>')
})

app.get('/about',(req,res)=>{
    
    res.send({name:'erfan',family:'seidipoor',likes:['football','biking']})
})

app.get('/bad',(req,res)=>{
    res.send({error:'This is a bad error'})
})
*/

app.listen(3000);