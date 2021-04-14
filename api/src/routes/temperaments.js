const {Router} = require('express')
const router = Router()

router.get('/temperaments', (req, res) => {
    res.send('hola, temperaments')
})
module.exports = router;