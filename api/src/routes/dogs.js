const {Router} = require('express')
const router = Router()
const {addDog, getDogs, getDogsQuery, getDogsParams} = require('../Controllers/dogs')

router.get('/', getDogs)
router.get('/dogs/?name={name}', getDogsQuery)
router.get('/dogs/:dogId', getDogsParams)
router.post('/dog', addDog);

module.exports = router;