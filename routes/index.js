const { Router } = require('express');
const auth = require('./auth.routes');

const router = Router();

router.use('/auth', auth);

module.exports = router;