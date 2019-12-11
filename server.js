const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const PostRouter = require('./router')

const app = express()
const port = 3000


app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/v1/posts', PostRouter)

app.listen(port, () => console.log(`Example app listenning on port ${port}`))


