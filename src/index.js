const experss = require('express')
const routes = require('./routes')
var cors = require('cors')

const app = experss()

app.use(cors())
app.use(experss.json())
app.use(routes)

app.listen(3333)