var express = require('express');
var router = express.Router();
var user = require('../controllers/user');

router.post('/create', user.create);
router.get('/:id', user.findOne);
router.put('/:id', user.update);
router.delete('/:id', user.delete)
router.post('/login', user.login);


module.exports = router;
