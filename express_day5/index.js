const express=require('express')
const app=express()

app.use(express.static('public/'))


var url=require('url')

app.get('/',(req,res)=>{
    res.render('home.ejs')
})

app.get('/signup',(req,res)=>{
    res.render('signup.ejs')
})


app.get('/saveform',(req,res)=>{
    var urldata=url.parse(req.url,true)

    console.log(urldata.query)
    const obj={data:urldata.query}

    res.render('dashboard.ejs',obj)

    
})

app.use((req,res)=>{
    res.send("<h1>404 Page Not Found</h1>")
})

const HOST='127.0.0.1'
const PORT=5000

app.listen(PORT,HOST,()=>{
    console.log(`Server is running on http://${HOST}:${PORT}`)
})


