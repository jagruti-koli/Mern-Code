const http = require('http')

const url = require('url');

const app = http.createServer((req, res) => {

    res.writeHead(200, {'content-type':'text/html'})
    res.write("<h1>Welcome to Node Js Server</h1>")

    const result = url.parse(req.url, true)

    console.log(result);
    res.end()
})

const PORT = 3000;
const HOST = "127.0.0.1"

app.listen(PORT, HOST, () => {
    console.log(`server is running on http://${HOST}:${PORT}`);
})
