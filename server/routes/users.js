var express = require('express');
var router = express.Router();
var user = require('../controllers/user');

router.post('/', user.create);
router.get('/:id', user.findOne);
router.put('/:id', user.update);
router.delete('/:id', user.delete)


module.exports = router;
