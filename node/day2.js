const http = require('http');

const module = ('./module');
const app = http.createServer((request, response) => {

    response.write(`<h1>Hellp welcome to Node js<h1>`)

    response.write("Addition" + add(3, 4));
    res.write("Substraction" + sub(20 - 15));

    console.log(module.add(5, 3));
    console.log(module.subtract(10, 4));


    response.end()
})

const PORT = 5000;
const HOST = "127.0.0.1"

app.listen(PORT, HOST, () => {
    console.log(`Server is running on http//${HOST}:${PORT}`);
})
