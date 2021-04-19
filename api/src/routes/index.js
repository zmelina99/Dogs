const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const DogsRoutes  = require('./dogs')
const TempRoutes = require('./temperaments')
const DogRoutes = require('./dog')
const router = Router();



// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/dogs', DogsRoutes)
router.use('/temperaments', TempRoutes)
router.use('/dog', DogRoutes)

module.exports = router;


