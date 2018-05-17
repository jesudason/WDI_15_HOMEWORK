const express = require('express')
const _ = require('lodash')
const app = express()
const PORT = 4567;

app.listen(PORT, () => {
	console.log('listening on ${PORT}')
})



app.set('views', './views')
app.set('view engine', 'ejs')

app.use(express.static('public'))

const colors = ["#ff83fa", "#00fa9a", "#00dcfa", "#c683ff", "#fff2fe" ]

app.get('/', (req, res) => {
	const data = {
		sayings: _.sample(sayings),
		colors: _.sample(colors)
	}
	res.render('home', data)
})

const sayings = [
"you look so nice", 
"you rock", 
"we should hang out more often", 
"I like your style",
"you are so good looking",
"you are the sunshine of my life",
]

app.get('/:name', (req, res) => {
	var name = req.params.name
	const data = {
		sayings: _.sample(sayings),
		colors: _.sample(colors),
		name: name
	}
	res.render('home', data)
})
