const express = require('express')
const app = express

app.get('/', (req, res)=>{
    res.render("<h1>Welcome to Express Day 4</h1>")
})

const PORT = 5000
const HOST = '127.0.0.1'
app.listen(PORT, HOST, () => {
    console.log(`Server started on port http://${HOST}:${PORT}`);
});