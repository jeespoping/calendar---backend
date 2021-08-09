// Event Routes
// /api/events
const {Router} = require('express');
const {validarJWT} = require('../middlewares/validar-jwt');
const {validarCampos} = require('../middlewares/validar-campos');
const {check} = require('express-validator');
const {getEventos, crearEvento, eliminarevento, actualizarEvento} = require('../controllers/events');
const { isDate } = require('../helpers/isDate');
const router = Router();

router.use(validarJWT);
//obtener eventos
router.get('/', getEventos)

// Crear un evento
router.post(
    '/',
    [
        check('title','El titulo es obligatorio').not().isEmpty(),
        check('start','Fecha de inicio es obligatoria').custom(isDate),
        check('end','Fecha de finalizacion es obligatoria').custom(isDate),
        validarCampos
    ],
    crearEvento
);

//Actualizar Evento
router.put('/:id', actualizarEvento);

//Borrar evento
router.delete('/:id', eliminarevento);


module.exports = router;