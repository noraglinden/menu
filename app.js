const express = require('express')
const app = express()

const PORT = 5000

app.get('/', (req, res) => res.send('Hi Menu!!'))

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))