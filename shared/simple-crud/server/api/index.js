const apiRouter = require('express').Router()
const os = require("os")

apiRouter.use('/notes', require('./notesRouter'))
apiRouter.get("/", (req,res)=> {
    return res.json(os.hostname())
})

module.exports = apiRouter