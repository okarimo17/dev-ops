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
const fs = require('fs');

server.get("/sec", (req, res) => {
  const SECRET_PATH = '/run/secrets/db_password';
  let dbPassword = null;
  try {
    // Read the content of the file synchronously (safe to do during app startup)
    dbPassword = fs.readFileSync(SECRET_PATH, 'utf8').trim();
    return res.json({pass: dbPassword})
    // process.env.DB_PASSWORD = dbPassword;    
  } catch (error) {
    return res.status(404).json({error: `Error reading secret at ${SECRET_PATH}:  ${error.message}`})
  }
});

server.listen(SERVER_PORT, ()=>{
    console.log(`Server is running on : http://localhost:${SERVER_PORT}`)
})