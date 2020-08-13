const express = require('express')
const server = express()

const { pageLanding, pageStudy, pageGiveClasses, SaveClasses} = require('./pages')

const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

server.use(express.static("public"))
server.use(express.urlencoded({extended: true}))

server.get("/", pageLanding)
server.get("/study", pageStudy)
server.get("/give-classes", pageGiveClasses)
server.post("/save-classes", SaveClasses)

server.listen(5500)