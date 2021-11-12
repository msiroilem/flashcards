const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const bodyParser = require('body-parser')
const AuthRouter = require('./routes/AuthRouter')
const CardRouter = require('./routes/CardRouter')
const DeckRouter = require('./routes/DeckRouter')
const UserRouter = require('./routes/UserRouter')
const app = express()

//which port number should be used here?
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api/auth', AuthRouter)
app.use('/api/cards', CardRouter)
app.use('/api/decks', DeckRouter)
app.use('/api/users', UserRouter)

app.listen(PORT, () => console.log(`Server running on Port: ${PORT}`))
