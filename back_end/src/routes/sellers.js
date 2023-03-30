const { Router } = require('express');
const router = Router();

router.route('/')
    .get((req,res) => res.send('Hola seller'))




module.exports = router;