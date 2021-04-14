const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const DogRoutes  = require('./dogs')
const TempRoutes = require('./temperaments')
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('./dogs', DogRoutes)
router.use('./temperaments', TempRoutes)

module.exports = router;
