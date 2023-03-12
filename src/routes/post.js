const PostController = require('../controllers/PostController');
const express = require('express'),
    router = express.Router();
const AuthController = require('../controllers/AuthController');

router.get('/', PostController.getAll);
router.post('/', AuthController.checkLogin, PostController.insert);
router.put('/:id', AuthController.checkLogin, PostController.update);
router.delete('/:id', AuthController.checkLogin, PostController.delete);

module.exports = router;