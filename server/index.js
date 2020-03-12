const express = require('express')
const path = require('path')
const exphbs = require('express-handlebars')
const homeRoutes = require('./routes/home')
const deliveryRoutes = require('./routes/delivery')
const contactsRoutes = require('./routes/contacts')
const instagramRoutes = require('./routes/instagram')
const cardRoutes = require('./routes/card')
const addRoutes = require('./routes/add')
const productsRoutes = require('./routes/products')

const app = express()

const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({extended: true}))

app.use('/', homeRoutes)
app.use('/delivery', deliveryRoutes)
app.use('/instagram', instagramRoutes)
app.use('/contacts', contactsRoutes)
app.use('/add', addRoutes)
app.use('/products', productsRoutes)
app.use('/card', cardRoutes)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})