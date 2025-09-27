if(process.env.NODE_ENV != 'production')
    require("dotenv").config();

const express = require("express")
const os = require("os")
const cors = require("cors")

const server = express()
const SERVER_PORT = process.env.SERVER_PORT || 3001

server.use(cors())


server.get("/", (req,res)=> {
    return res.json(os.hostname())
})

server.get("/test", (req, res) => {
  res.json({
    msg: "API test",
    container: os.hostname()
  });
});

server.listen(SERVER_PORT, ()=>{
    console.log(`Server is running on : http://localhost:${SERVER_PORT}`)
})
