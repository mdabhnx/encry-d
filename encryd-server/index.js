const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

app.get('/', (_, res) => {
  res.json({
    message: '🔥🔥🔥',
  })
})

app.use('/v1/encryd', require('./src/routes/v1/encrypt%decrypt'))

app.listen(process.env.PORT || 8000)

module.exports = app
