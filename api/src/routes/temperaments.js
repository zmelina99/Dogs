const {Router} = require('express')
const router = Router()
const {getTemp} = require('../Controllers/temperaments')

router.get('/', getTemp)

module.exports = router;