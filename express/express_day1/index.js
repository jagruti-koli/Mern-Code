const express = require('express');

const app = express()

app.get('/', (req, res) => {
    res.send("<marquee><h1>Express5.2.1 fast, unopinionated, minimalist web framework for node.js</h1></marquee>")
})

const PORT = 5000
const HOST = '127.0.0.1';

app.listen(PORT, HOST, () => {
    console.log(`server is running on http://${HOST}:${PORT}`);
})