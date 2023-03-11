const PostController = require('../controllers/PostController');
const express = require('express'),
    router = express.Router();

router.get('/', PostController.getAll);
router.post('/', PostController.insert);
router.put('/:id', PostController.update);
router.delete('/:id', PostController.delete);

module.exports = router;