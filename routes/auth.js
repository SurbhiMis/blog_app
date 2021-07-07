const handleLogin = require('../controller/auth/handleLogin');
const handleRegister = require('../controller/auth/handleRegister');


const router = require('express').Router();


router.post("/register" , handleRegister)

router.post("/login" , handleLogin)

module.exports = router;