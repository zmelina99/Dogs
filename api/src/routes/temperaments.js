const {Router} = require('express')
const router = Router()

router.get('/', (req, res) => {
    res.send('hola, temperaments')
})
module.exports = router;