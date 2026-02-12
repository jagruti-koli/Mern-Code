const http= require('http');
const app= http.createServer((req, res)=>{

    res.write(`<h1 style="text-align:Center">Hello welcome to Node js<h1>`)

    for(let i = 0; i <=100; i++){
        res.write( `<div style="background-color:yellow; margin:10px; padding:10px; height:${i}; width:${i}display:inline-block;"></div>`)
    }

    res.end()
})

const PORT=5000;    
const HOST="127.0.0.1"

app.listen(PORT, HOST,()=>{
    console.log(`Server is running on http://${HOST}:${PORT}`);
})
