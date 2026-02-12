const express = require('express')
const app = express();

app.use(express.static('public/'))

app.get('/', (req, res)=>{
    res.render('home.ejs')
})

app.get('/about', (req, res)=>{

    const obj = {
        "id": 1,
        "name": "jagrutikoli6201@gmail.com"
    }

    const result = {data:obj}
    res.render('about.ejs', result)
})

app.get('/contact', (req,res)=>{
    res.render('contact.ejs')
})

app.use((req, res)=>{
    res.send("<h4>404 Page Not Found</h4>")
})

const PORT = 5000
const HOST = '127.0.0.1'

app.listen(PORT, HOST, () => {
    console.log(`server is running on http://${HOST}:${PORT}`);
})

