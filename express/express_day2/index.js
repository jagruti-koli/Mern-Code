const express = require('express')
const app = express()

app.use(express.static('public/'))

const menu = `
    <ul>
        <li><a href='/'>Home</a>
        <li><a href='/about'>About Us</a>
        <li><a href='/services'>Services</a>
        <li><a href='/contact'>Contact Us</a>
    </ul>`

app.get('/', (req, res) => {
    res.send(menu + "<h1>Welcom to Home Page</h1>")
})

app.get('/about', (req, res) => {
    res.send(menu + `<h1>Welcome to About Us Page</h1>
    <img src="image.png" alt="empty-card">`)
})

app.get('/services', (req, res) => {
    res.send(menu + "<h1>Welcome to Services Page</h1>")
})

app.get('/contact', (req, res) => {
    const obj = {
        id: 1,
        name: "Jagruti",
        email: "jagrutikoli6201@gmail.com",
        address: "Pune"
    }
    res.send(obj)
})

app.get('/contact', (req, res) => {
    res.send(menu + "<h1>Welcome to Contact Us Page</h1>")
})

app.use((req, res) => {
    `
    <h1>404- Page Not Found</h1>
    <a href='/'>Go To Home Page</a>`
})
const PORT = 5000
const HOST = '127.0.0.1'

app.listen(PORT, HOST, () => {
    console.log(`server is running on http://${HOST}:${PORT}`);
})