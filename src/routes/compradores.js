const express = require ('express');
const router = express.Router();

const  compradoresController = require('../controllers/compradoresController');


router.get('/', compradoresController.list);
router.post('/add', compradoresController.save);
router.get('/delete/:id', compradoresController.delete);
router.get('/update/:id', compradoresController.edit);
router.post('/update/:id', compradoresController.update);

module.exports = router;