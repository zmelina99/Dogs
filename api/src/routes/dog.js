const {Router} = require('express')
const router = Router()
const {addDog} = require('../Controllers/dog')

router.post('/', addDog);

module.exports = router;

