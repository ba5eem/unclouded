const express = require('express')
const path = require('path')
const app = express()
const PORT = process.env.PORT || 8080;


app.set('views', path.join(__dirname, '../public'))
app.use(express.static('public'))


app.get('/ping', (req, res) => {
  res.json('PONG')
})

app.get('/api/home', (req, res) => {
  res.json({
  	path: '/api/home',
  	data: []
  })
})

app.listen(PORT, () => {
	console.log(`Server listenining on PORT: ${PORT}`)
})