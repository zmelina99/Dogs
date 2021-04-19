const {Router} = require('express')
const router = Router()
const {getDogs, getDogsParams} = require('../Controllers/dogs')
const {addDog} = require('../Controllers/dog')

router.get('/', getDogs)
router.get('/:dogId', getDogsParams) 
router.post('/dog', addDog);

module.exports = router;