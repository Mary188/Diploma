const {Router} = require('express')
const router = Router()


//обработка get запроса
router.get('/', (req,res) => {
    //отвечаем пользователю на запрос
    res.render('instagram', {
        title: 'Инстаграм'
    })
})



module.exports = router