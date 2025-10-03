if(process.env.NODE_ENV != 'production')
  require("dotenv").config();

const express = require("express")
const cors = require("cors");
const { errorHandler } = require("./middlewares/errorHandler");


const SERVER_PORT = process.env.SERVER_PORT || 3000

const server = express()

server.use(cors())
server.use(express.json()); 

server.get("/", (req,res)=> {
  return res.json('Karimo ')
})

server.use('/v1/',require("./api"))
server.use(errorHandler);



server.listen(SERVER_PORT, ()=>{
  console.log(`Server is running on : http://localhost:${SERVER_PORT}`)
})