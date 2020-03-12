const {Router} = require('express')
const router = Router()

router.get('/', (req, res) => {
  res.render('index', {
    title: 'Сlothing store',
    isHome: true
  })
})

module.exports = router